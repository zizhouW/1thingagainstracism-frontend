const STORAGE_KEY = '1Thing';
const votedActionsKey = `${STORAGE_KEY}-votedActions`;
const votedProjectKey = `${STORAGE_KEY}-votedProjects`;

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

// checks if the projectId has already been voted by the user
function isProjectVoted(projectId) {
  const space = localStorage.getItem(votedProjectKey);
  if (!space) return false;
  const votedProjects = new Set(JSON.parse(space));

  return votedProjects.has(projectId);
}

// add projectId to localStorage voted action ids list (in string format)
function setVotedProjects(projectId) {
  const space = localStorage.getItem(votedProjectKey);
  if (!space) {
    localStorage.setItem(votedProjectKey, `["${projectId}"]`);
  } else {
    const votedProjects = new Set(JSON.parse(space));
    votedProjects.add(projectId);
    localStorage.setItem(votedProjectKey, JSON.stringify([...votedProjects]));
  }
  return false;
}

function getVotedProjects() {
  const space = localStorage.getItem(votedProjectKey);
  return space ? new Set(JSON.parse(space)) : new Set();
}

export { isActionVoted, setVotedActions, getVotedActions, isProjectVoted, setVotedProjects, getVotedProjects };
