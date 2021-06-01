import React, { useState, useEffect } from 'react';
import { getActions } from '../../api/actions';

function AllActions() {
  const [actions, setActions] = useState([]);
  const [isError, setIsError] = useState(false);
  const getActionsCallback = (result, isError) => {
    if (isError) {
      setIsError(true);
    } else if (result) {
      setActions(result);
    }
  }
  useEffect(() => {
    getActions(getActionsCallback);
  })
  return (
    <div className="all-actions">
      <h2>What people have done?</h2>
      {actions.map((action) => {
        return <div><div>{action.name}, vote: {action.vote_count}</div><div>{action.created_at}, vote: {action.description}</div></div>
      })}
    </div>
  );
}

export default AllActions;
