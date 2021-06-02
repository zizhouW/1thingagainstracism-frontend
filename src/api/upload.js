import { API_HOST } from '../constants';

function getSignedUrl(callback) {
  return fetch(`${API_HOST}/signedurl/POST`)
  .then(res => res.json())
  .then((result) => {
    callback(result);
  }, (error) => {
    callback(error, true);
  })
}

function uploadFile(url, file, callback) {
  return fetch(url, {
    method: 'post',
    body: file,
  })
  .then(res => res.json())
  .then((result) => {
    callback(result);
  }, (error) => {
    callback(error, true);
  })
}

function bulkUpload(files, callback) {
  const signedUrls = [];
  const uploaded = [];
  
  Promise.allSettled(files.map(() => getSignedUrl((result) => { signedUrls.push(result) }))).then(() => {
    const uploads = [];
    for (let i = 0; i < signedUrls.length; ++i) {
      uploads.push(uploadFile(signedUrls[i]?.signed_url, files[i], (result) => uploaded.push(result)));
    }

    Promise.allSettled(uploads).then((result) => {
      debugger;
      callback(uploaded);
    });
  });
}

export { bulkUpload };
