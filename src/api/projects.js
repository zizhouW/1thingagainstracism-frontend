import { API_HOST } from '../constants';

function getProjects(lastProjectId, callback) {
  return fetch(`${API_HOST}/project?orderBy=time&limit=5${lastProjectId ? `&offset=${lastProjectId}` : ''}`)
    .then(res => res.json())
    .then((result) => {
      callback(result?.projects);
    }, (error) => {
      callback(error, true);
    })
}

// function getAction(actionId, callback) {
//   if (!actionId) return;
//   return fetch(`${API_HOST}/actions/${actionId}`)
//     .then((res) => res.json())
//     .then((result) => {
//       callback(result);
//     }, 
//     (error) => {
//       callback(error, true);
//     })
// }

// function createAction(action, callback) {
//   if (!action) return;
//   return fetch(`${API_HOST}/actions` , {
//       method: 'post',
//       body: JSON.stringify({
//         "action":  action 
//       }),
//       headers: { "Content-Type": "application/json"},
//     })
//     .then((res) => res.json())
//     .then((result) => {
//       callback({"actionId": result.actionId});
//     }, 
//     (error) => {
//       callback(error, true);
//     })
// }

// function voteAction(actionId, callback) {
//   if (!actionId) return;
//   return fetch(`${API_HOST}/actions/${actionId}/vote`, {
//     method: 'post',
//   })
//     .then(res => res.json())
//     .then((result) => {
//       callback(actionId, result.vote_count);
//     }, () => {
//       callback(actionId, undefined, true);
//     });
// }

export { getProjects };
