const STORAGE_KEY = '1Thing';
const votedActionsKey = `${STORAGE_KEY}-votedActions`;

// checks if the actionId has already been voted by the user
function isActionVoted(actionId) {
  const space = localStorage.getItem(votedActionsKey);
  if (!space) return false;
  const votedActions = new Set(JSON.parse(space));

  return votedActions.has(actionId);
}

// add actionId to localStorage voted action ids list (in string format)
function setVotedActions(actionId) {
  const space = localStorage.getItem(votedActionsKey);
  if (!space) {
    localStorage.setItem(votedActionsKey, `["${actionId}"]`);
  } else {
    const votedActions = new Set(JSON.parse(space));
    votedActions.add(actionId);
    localStorage.setItem(votedActionsKey, JSON.stringify([...votedActions]));
  }
  return false;
}

function getVotedActions() {
  const space = localStorage.getItem(votedActionsKey);
  return space ? new Set(JSON.parse(space)) : new Set();
}

export { isActionVoted, setVotedActions, getVotedActions };
