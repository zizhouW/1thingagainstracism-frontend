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
      {actions.map(() => {
        return <div>actions.name</div>
      })}
    </div>
  );
}

export default AllActions;
