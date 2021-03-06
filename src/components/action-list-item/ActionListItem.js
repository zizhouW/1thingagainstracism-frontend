import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeartSvg from './heart.svg';
import HeartFilledSvg from './heart-filled.svg';
import { voteAction } from '../../api/actions';
import { isActionVoted, setVotedActions } from '../../util/localStorage';
import { IMAGE_BASE } from '../../constants';
// import ShareSvg from './share.svg';
import './ActionListItem.scss';

function ActionListItem({ id, name, description, voteCount, shareLink, images }) {
  const [isVoted, setIsVoted] = useState(false);
  const [newVoteCount, setNewVoteCount] = useState(voteCount);
  const history = useHistory();
  const voteActionsCallback = (actionId, newCount, isError) => {
    if (!isError) {
      setVotedActions(actionId);
      setNewVoteCount(newCount);
      setIsVoted(true);
    }
  };
  const voteForAction = () => {
    if (!isActionVoted(id)) {
      voteAction(id, voteActionsCallback);
    }
  };
  useEffect(() => {
    if (isActionVoted(id)) {
      setIsVoted(true);
    }
  }, [id]);

  const redirectToActionDetail = () => {
    history.push(`/actions/${id}`);
  };
  return (
    <div className="action-list-item">
      <div className="action-list-item__name">{name}</div>
      <div className="action-list-item__description" onClick={redirectToActionDetail}>{description}</div>
      {images && images?.map((image, idx) => <img className="action-list-item__image" src={`${IMAGE_BASE}/${image}`} alt={`action${idx + 1}`} key={`action${idx + 1}`} />)}
      <div className="action-list-item__actionables">
        <div className="action-list-item__actionables__vote" onClick={voteForAction}>
          <img src={isVoted ? HeartFilledSvg : HeartSvg} alt="heart" />{newVoteCount}
        </div>
        {/* <div className="action-list-item__actionables__share" onClick={handleShare}>
          <img src={ShareSvg} alt="heart" />{0}
        </div> */}
      </div>
      
    </div>
  );
}

export default ActionListItem;
