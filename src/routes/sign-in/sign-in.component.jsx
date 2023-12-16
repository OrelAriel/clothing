import React from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log('response', user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}
