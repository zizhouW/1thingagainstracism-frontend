import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import MButton from '../m-button/MButton';
import CameraSvg from './camera.svg';
import './ShareAction.scss';

function ShareAction({ handleSubmit }) {
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <div className="share-action">
      <h2 className="share-action__title">Share 1 Thing You Did</h2>
      <div className="share-action__subtitle">Be proud of what you did in the past and inspire others!</div>
      <TextField
        className="share-action__input"
        placeholder="Share one thing you did in the past to fight racism."
        inputProps={{ 'aria-label': 'action-description' }}
        onChange={(event) => {
          setIsError(false);
          setDescription(event.target.value)
        }}
        value={description}
        error={isError}
        helperText={isError ? 'Please enter one thing you did to fight racism' : ''}
      />
      <div className="share-action__upload">
        <img src={CameraSvg} alt="upload image" />
      </div>
      <MButton
        className="share-action__submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Share what you did
      </MButton>
    </div>
  );
}

export default ShareAction;
