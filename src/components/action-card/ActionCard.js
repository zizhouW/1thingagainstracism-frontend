import React from 'react';
import SupportSvg from './support.svg';
import './ActionCard.scss';

function ActionCard({ title, description, handleSupport }) {
  return (
    <div className="action-card">
      <div className="action-card__title">{title}</div>
      <div className="action-card__description">{description}</div>
      <div className="action-card__support" onClick={handleSupport}>
        <img src={SupportSvg} alt="suport" />Support
      </div>
    </div>
  );
}

export default ActionCard;
