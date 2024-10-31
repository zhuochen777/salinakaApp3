
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCSoVeeyKWUWIBthDPUPxq17dSlufWJ8OU",
  authDomain: "salinakaapp3.firebaseapp.com",
  projectId: "salinakaapp3",
  storageBucket: "salinakaapp3.appspot.com",
  messagingSenderId: "96118289665",
  appId: "1:96118289665:web:de7b1aa64cb69098ae1700",
  measurementId: "G-R0JSRTTGBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider_google = new GoogleAuthProvider()
const provider_github = new GithubAuthProvider()
const provider_facebook = new FacebookAuthProvider()


export {auth,provider_google,provider_github,provider_facebook}