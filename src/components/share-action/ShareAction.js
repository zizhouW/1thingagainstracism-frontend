import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { createAction } from '../../api/actions';
import { bulkUpload } from '../../api/upload';
import MButton from '../m-button/MButton';
import CameraSvg from './camera.svg';
import './ShareAction.scss';

function ShareAction({ submitCallback }) {
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);

  const imagesSelectedHandler = (e) => {
    setImages([...images, ...e.target.files]);
  }

  const handleSubmit = () => {
    if (images && images.length) {
      bulkUpload(images, (uploaded) => {
        //uploaded has list of file names that was uploaded successfully
        if ( uploaded.length === 0 ){
          alert("Failed to upload action image, please try again later!");
          return;
        }
        const action = {
          name: "description",
          description: description,
          images: uploaded,
          categories: ["awareness"]
        };
        createAction(action, (result) => {
          if (result.actionId) {
            alert("Thank you for doing your 1 thing to fight against racism!\n");
            submitCallback && submitCallback();
          }
          else {
            alert("Failed to create action, please try again later!");
          }
        }
        );
      })
    }
    else {
      const action = {
        name: "description",
        description: description,
        categories: ["awareness"]
      }
      createAction(action, () => alert("Thank you for doing your 1 thing to fight against racism!"));
      submitCallback && submitCallback();
    }


  }

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
      <div className="share-action__preview">
        {images?.map((image, idx) => {
          const url = URL.createObjectURL(image);
          return <img className="share-action__preview__image" src={url} alt={`share-action-${idx + 1}`} key={`image-${idx + 1}`} />
        })}
      </div>
      <div className="share-action__upload">
        <label htmlFor="image-upload"><img src={CameraSvg} alt="upload" /></label>
        <input type="file" id="image-upload" name="image-upload" multiple onChange={imagesSelectedHandler} accept="image/*" />
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
