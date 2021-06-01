import React, { useState, useEffect } from 'react';
import { getActions, voteAction } from '../../api/actions';
import ActionListItem from '../../components/action-list-item/ActionListItem';
import ShareAction from '../../components/share-action/ShareAction';
import { DOMAIN } from '../../constants';
import { getVotedActions, isActionVoted, setVotedActions } from '../../util/localStorage';
import './AllActions.scss';

function AllActions() {
  const [isLoading, setIsLoading] = useState(true);
  const [actions, setActions] = useState([]);
  const [isError, setIsError] = useState(false);
  const getActionsCallback = (actions, isError) => {
    if (isError) {
      setIsError(true);
    } else if (actions) {
      const votedActionsSet = getVotedActions();
      actions?.forEach((action) => {
        if (action?.id && votedActionsSet.has(action.id)) {
          action.isVoted = true;
        }
      })
      setActions(actions);
    }
    setIsLoading(false);
  }
  const voteForAction = (actionId) => {
    if (!isActionVoted(actionId)) {
      voteAction(actionId, voteActionsCallback);
    }
  };
  const voteActionsCallback = (actionId, isError) => {
    if (!isError) {
      setVotedActions(actionId);
      const updatedActions = [...actions];
      const votedAction = updatedActions.find((action) => action?.id === actionId);
      votedAction.isVoted = true;
      votedAction.vote_count = (votedAction?.vote_count || 0) + 1;
      setActions([...updatedActions]);
    }
  };

  useEffect(() => {
    getActions(getActionsCallback);
  }, []);

  return (
    <div className="all-actions">
      <h2>What people have done?</h2>
      <div className="action-list">
        {isError ? 'Error getting all actions': ''}
        {isLoading ? 'Loading...' : actions.map((action, idx) => {
          return (
            <ActionListItem
              key={action?.id || `action-${idx}`}
              name={action?.name || ''}
              description={action?.description || ''}
              voteCount={action?.vote_count || 0}
              images={action?.images || []}
              shareLink={action?.id ? `${DOMAIN}/action/${action.id}` : DOMAIN}
              handleSupport={() => voteForAction(action?.id)}
              isVoted={action?.isVoted}
            />
          );
        })}
      </div>
      <ShareAction />
    </div>
  );
}

export default AllActions;
