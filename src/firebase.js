import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBPTnve3_n24KUnh324FuRS1h6bGRG92bQ",
    authDomain: "whatsapp-clone-21bce.firebaseapp.com",
    projectId: "whatsapp-clone-21bce",
    storageBucket: "whatsapp-clone-21bce.appspot.com",
    messagingSenderId: "198710109295",
    appId: "1:198710109295:web:1ff704c8fafe573906199a"
  });

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();

export { auth, db };