import React from 'react';
import heart from './heart.svg';
import './ActionCard.scss';

function ActionCard({ title, description, handleSupport }) {
  return (
    <div className="action-card">
      <div className="action-card__title">{title}</div>
      <div className="action-card__description">{description}</div>
      <div className="action-card__support" onClick={handleSupport}>
        <img src={heart} alt="heart" />Support
      </div>
    </div>
  );
}

export default ActionCard;
