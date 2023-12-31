import React, { useState } from 'react';
import Button from '../button/button.component';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';
import FromInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFormField = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.error(err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />

        <FromInput
          label='Password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
