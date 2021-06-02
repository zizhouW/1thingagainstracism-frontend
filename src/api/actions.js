import { API_HOST } from '../constants';

function getActions(callback) {
  return fetch(API_HOST + "/actions?orderBy=time")
      .then(res => res.json())
      .then(
        (result) => {
          callback(result?.actions);
        },
        (error) => {
          callback(error, true);
        }
      )
}

function voteAction(actionId, callback) {
  if (!actionId) return;
  return fetch(`${API_HOST}/actions/${actionId}/vote`, {
    method: 'post',
  })
  .then(res => res.json())
  .then(() => {
    callback(actionId);
  }, (error) => {
    callback(actionId, true);
  });
}

export { getActions, voteAction };
