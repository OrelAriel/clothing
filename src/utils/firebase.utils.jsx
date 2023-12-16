import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBgU2yW6ddAqjRC1Bc7bJiYmCAaBlaFhVM',
  authDomain: 'clothing-db-21c89.firebaseapp.com',
  projectId: 'clothing-db-21c89',
  storageBucket: 'clothing-db-21c89.appspot.com',
  messagingSenderId: '254012015566',
  appId: '1:254012015566:web:e8a9c6b129b57b7864619f',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userDocRef;
};
