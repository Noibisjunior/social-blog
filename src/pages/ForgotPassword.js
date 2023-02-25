import  { useState } from 'react';
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';
import OAuth from '../components/Oauth';

export default function ForgotPassword() {
  const navigate = useNavigate()
  // const auth  = getAuth()
  // const auth = firebase.auth();

  
 async function onSubmit(e) {
   e.preventDefault() //prevent page from reloading
   try{
   const auth = getAuth() //get authentication from firebase
   await sendPasswordResetEmail(auth,email)
  toast.success("email was sent successfully")
 }
 catch(error){
 toast.error('could not send reset password link')
 }
 }
    const [email, setEmail] = useState('');
    function onChange(e) {
      // console.log(e.target.value);
      setEmail(e.target.value);
    }
  return (
    <>
      <section>
        <h1 className="text-center font-bold" id="space">
          Forgot Password
        </h1>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img 
                src="https://plus.unsplash.com/premium_photo-1661423729611-2ad9b64b98f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="key"
                className="img-fluid w-100"
                id="space"
              />
            </div>
            <div className="col-md p-5">
              <form onSubmit={onSubmit} className="mt-5">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email address"
                  className="w-full px-4 py-2 text-xl text-gray-700
                  bg-white border-gray-300 rounded transition ease-in-out mb-6"
                />

                <button
                  type="submit"
                  className="btn btn-primary mt-10 px-2 py-3 "
                  id="space"
                >
                  Send Reset instructions
                </button>
                <div className="text-center justify-content-center mt-2 pt-2">
            <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account ?&nbsp;
                    <span
                      style={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: '#298af2',
                      }}
                      onClick={() => navigate('/auth')}
                    >
                      Sign In
                    </span>
                  </p>
                </div>
                <OAuth/>
                {/* <div
                  className="my-4 items-center before:border-t flex
               before:flex-1
               before:border-gray-300
               after:border-t
               after:flex-1
               after:border-gray-300"
                >
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
