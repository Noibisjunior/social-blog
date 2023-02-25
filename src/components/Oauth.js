import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const Navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth(); //getting the auth from firebase/auth
      const provider = new GoogleAuthProvider(); //getting the provider
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);

    //   check for the user
      // const docRef = doc(db, 'users', user.uid);
      // const docSnap = await getDoc(docRef);

      // if (!docSnap.exists()) {
      //   await setDoc(docRef, {
      //     name: user.displayName,
      //     email: user.email,
      //     timestamp: serverTimestamp(),
      //   });
      // }
      Navigate('/');
    } catch (error) {
    //   toast.error('could not authorize with Google');
      console.log(error);
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="btn btn-primary mt-10 px-2 py-3"
      id='space'
    >
      <FcGoogle className="text-2xl color-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
