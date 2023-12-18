import React from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}
