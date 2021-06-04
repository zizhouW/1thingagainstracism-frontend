import React from 'react';
import MButton from '../m-button/MButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './VictimStory.scss';

function VictimStory({ title, description, link, image }) {
  const openLink = () => window.open(link);
  return (
    <div className="victim-story">
      <div className="victim-story__title">{title}</div>
      <div className="victim-story__description">
        {description}
        <br />
        <MButton
          color="primary"
          endIcon={<ArrowForwardIosIcon />}
          onClick={openLink}
        >
          Read more
        </MButton>
      </div>
      <img className="victim-story__image" src={image} alt="victim-story" onClick={openLink} />
    </div>
  );
}

export default VictimStory;
