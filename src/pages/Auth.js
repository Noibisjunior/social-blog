import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  getAuth,
} from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/Oauth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //  async function onClick(){
  // try {
  //   const auth = getAuth(); //get authentication from firebase
  //   await sendEmailVerification(auth.currentUser);
  //   toast.success("Confirmation link sent successfully")
  // navigate("/")
  // } catch (error) {
  //   // toast.error("could not send confirmation email")
  // }
  // }

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        setActive('home');
      } else {
        return toast.error('All fields are mandatory to fill');
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && lastName && email && password) {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await sendEmailVerification(auth.currentUser);
        toast.success('Please confirm your email');

        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive('home');
      } else {
        return toast.error('All fields are mandatory to fill');
      }
    }
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div class="col-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1661423729611-2ad9b64b98f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="key"
            className="img-fluid w-100"
            id="space"
          />
        </div>
        <div className="col-md p-5">
          <div className="col-12 text-center">
            <div className="text-center heading py-2">
              {!signUp ? 'Sign-In' : 'Sign-Up'}
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row" onSubmit={handleAuth}>
                {signUp && (
                  <>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                <div className="col-12 py-3">
                  <input
                    type="email"
                    className="form-control input-text-box"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <input
                    type="password"
                    className="form-control input-text-box"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                {signUp && (
                  <div className="col-12 py-3">
                    <input
                      type="password"
                      className="form-control input-text-box"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="col-12 py-3 text-center">
                  <button
                    className={`btn ${!signUp ? 'btn-sign-in' : 'btn-sign-up'}`}
                    type="submit"
                  >
                    {!signUp ? 'Sign-in' : 'Sign-up'}
                  </button>
                </div>
              </form>
              <div>
                {!signUp ? (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account ?&nbsp;
                        <span
                          className="link-danger"
                          style={{ textDecoration: 'none', cursor: 'pointer' }}
                          onClick={() => setSignUp(true)}
                        >
                          Sign Up
                        </span>
                      </p>

                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Forgot Password ?&nbsp;
                        <span
                          className="link-danger"
                          style={{ textDecoration: 'none', cursor: 'pointer' }}
                          onClick={() => navigate('/ForgotPassword')}
                        >
                          Reset Password
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account ?&nbsp;
                        <span
                          style={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            color: '#298af2',
                          }}
                          onClick={() => setSignUp(false)}
                        >
                          Sign In
                        </span>
                      </p>
                    </div>
                  </>
                )}
                <OAuth/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
