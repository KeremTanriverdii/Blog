import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import fire from './Fire.json'

const firebaseConfig = {
    apiKey: fire.apiKey,
    authDomain: fire.authDomain,
    projectId: fire.projectId,
    storageBucket: fire.storageBucket,
    messagingSenderId: fire.messagingSenderId,
    appId: fire.appId,
    measurementId: fire.measurementId
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com')

