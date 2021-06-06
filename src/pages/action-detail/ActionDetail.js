import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getAction } from '../../api/actions';
import ActionListItem from '../../components/action-list-item/ActionListItem';
import MButton from '../../components/m-button/MButton';
import ShareAction from '../../components/share-action/ShareAction';
import { DOMAIN } from '../../constants';
import './ActionDetail.scss';

function ActionDetail() {
  const { actionId } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [action, setAction] = useState(null);

  const getActionCallback = (action, isError) => {
    if (isError) {
      setIsError(true);
    } else {
      setAction(action);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getAction(actionId, getActionCallback);
  }, [actionId]);

  const redirectToActions = () => {
    history.push('/inspirations');
  };

  return (
    <div className="action-detail">
      <h2>What people have done?</h2>
      {isLoading ? 'Loading...' : (
        isError ? 'Oops... there is an error. Please try again.' : (
        <ActionListItem
          id={actionId || ''}
          name={action?.name || ''}
          description={action?.description || ''}
          voteCount={action?.vote_count || 0}
          images={action?.images || []}
          shareLink={action?.id ? `${DOMAIN}/action/${actionId}` : DOMAIN}
        />
      ))}
      <MButton color="primary" onClick={redirectToActions}>
        See what other people have done
      </MButton>
      <ShareAction />
    </div>
  );
}

export default ActionDetail;
