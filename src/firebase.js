import firebase from 'firebase/app'
import { initializeApp} from 'firebase/app';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyAhbDvdFG2_hGVJS9_zi1rsE0mDP2eJNAo",
    authDomain: "fb-clone-react-4731b.firebaseapp.com",
    projectId: "fb-clone-react-4731b",
    storageBucket: "fb-clone-react-4731b.appspot.com",
    messagingSenderId: "159165335230",
    appId: "1:159165335230:web:0544165f7156b14762c0ef"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  const provider = new GoogleAuthProvider()
  
  export { auth, provider};
  export default db;

  