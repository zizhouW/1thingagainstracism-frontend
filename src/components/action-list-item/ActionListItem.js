import React from 'react';
import HeartSvg from './heart.svg';
import ShareSvg from './share.svg';
import './ActionListItem.scss';

function ActionListItem({ name, description, voteCount, shareLink, images, handleSupport, isVoted, handleShare }) {
  return (
    <div className="action-list-item">
      <div className="action-list-item__name">{name}</div>
      <div className="action-list-item__description">{description}</div>
      {images && images?.map((image, idx) => {
        <img src={image} alt={`image${idx + 1}`} />
      })}
      <div className="action-list-item__actionables">
        <div className="action-list-item__actionables__vote" onClick={handleSupport}>
          <img src={HeartSvg} alt="heart" />{voteCount}
        </div>
        {/* <div className="action-list-item__actionables__share" onClick={handleShare}>
          <img src={ShareSvg} alt="heart" />{0}
        </div> */}
      </div>
      
    </div>
  );
}

export default ActionListItem;
