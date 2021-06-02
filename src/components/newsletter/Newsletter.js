import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MButton from '../m-button/MButton';
import './Newsletter.scss';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Newsletter({ handleNewsletterSignup }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSignup = () => {
    if (!re.test(email)) {
      setIsEmailValid(false);
    } else {
      handleNewsletterSignup();
    }
  };

  return (
    <div className="newsletter">
      <h2 className="newsletter__title">Sign up for the latest news</h2>
      <div className="newsletter__subtitle">
        Get exclusive suggestions and latest updates from 1 Thing I Did to Against Racism by signing up for our weekly newsletter.
      </div>
      <TextField
        className="newsletter__email"
        placeholder="Your email address"
        inputProps={{ 'aria-label': 'email' }}
        onChange={(event) => {
          setIsEmailValid(true);
          setEmail(event.target.value)
        }}
        value={email}
        error={!isEmailValid}
        helperText={isEmailValid ? '' : 'Invalid email, please enter again'}
      />
      <MButton variant="outlined" color="primary" onClick={() => handleSignup()}>
        Sign up
      </MButton>
    </div>
  );
}

export default Newsletter;
