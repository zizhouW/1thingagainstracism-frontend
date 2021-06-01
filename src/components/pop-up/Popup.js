import React, { useState } from 'react';
import CloseSvg from './close.svg';
import './Popup.scss';

function Popup({ trigger, children }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <span className="pop-up">
      <span className="pop-up__trigger" onClick={() => setIsShown(true)}>
        {trigger}
      </span>
      {isShown && (
        <div className="pop-up__content">
          {children}
          <img
            className="pop-up__content__close"
            src={CloseSvg}
            alt="close"
            onClick={() => setIsShown(false)}
          />
        </div>
      )}
    </span>
  );
}

export default Popup;
