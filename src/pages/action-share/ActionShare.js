import React from 'react';
import { useHistory } from 'react-router-dom';
import './ActionShare.scss';
import BackSvg from './back.svg';
import ShareAction from '../../components/share-action/ShareAction';


function ActionShare() {
  const history = useHistory();

  return (
    <div className="action-share">
      <img
        className="action-share__back"
        src={BackSvg}
        alt="back"
        onClick={() => history.push('/')}
      />
      <ShareAction submitCallback={(actionId) => history.push(`/actions/${actionId}`)}/>
    </div>
  );
}

export default ActionShare;
