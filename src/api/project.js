import { API_HOST } from '../constants';

function getProjects(lastProjectId, callback) {
  return fetch(`${API_HOST}/projects?orderBy=time&limit=5${lastProjectId ? `&offset=${lastProjectId}` : ''}`)
    .then(res => res.json())
    .then((result) => {
      callback(result?.projects);
    }, (error) => {
      callback(error, true);
    })
}

function getProject(projectId, callback) {
  if (!projectId) return;
  return fetch(`${API_HOST}/projects/${projectId}`)
    .then((res) => res.json())
    .then((result) => {
      callback(result);
    }, 
    (error) => {
      callback(error, true);
    })
}

function createProject(project, callback) {
  if (!project) return;
  return fetch(`${API_HOST}/projects` , {
      method: 'post',
      body: JSON.stringify({
        "project":  project 
      }),
      headers: { "Content-Type": "application/json"},
    })
    .then((res) => res.json())
    .then((result) => {
      callback({"projectId": result.project_id});
    }, 
    (error) => {
      callback(error, true);
    })
}

function voteProject(projectId, callback) {
  if (!projectId) return;
  return fetch(`${API_HOST}/projects/${projectId}/vote`, {
    method: 'post',
  })
    .then(res => res.json())
    .then((result) => {
      callback(projectId, result.vote_count);
    }, () => {
      callback(projectId, undefined, true);
    });
}

export { getProjects, getProject, voteProject, createProject };
