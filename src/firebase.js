// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCW_lL5bpXEickNp1PD1Nyq3-BW6LZQcZ0",
//   authDomain: "react-blogs-app.firebaseapp.com",
//   projectId: "react-blogs-app",
//   storageBucket: "react-blogs-app.appspot.com",
//   messagingSenderId: "520626893881",
//   appId: "1:520626893881:web:5432b7c30440ec4a0749e8"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV9j3ZH5hI7TvrDve8kCT2ah-5XcgzSrA",
  authDomain: "socialblog-website.firebaseapp.com",
  projectId: "socialblog-website",
  storageBucket: "socialblog-website.appspot.com",
  messagingSenderId: "787936829467",
  appId: "1:787936829467:web:db3f4584a18d0a4dcb98be",
  measurementId: "G-QL3KK8R1XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };