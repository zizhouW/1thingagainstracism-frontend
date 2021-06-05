import { API_HOST } from '../constants';

function getSignedUrl(callback) {
  return fetch(`${API_HOST}/signedurl/PUT`)
  .then((res) => {
    return res.json()
  })
  .then((result) => {
    callback(result); //{ file_name: "...", "signed_url": "..."}
  }, (error) => {
    callback(error, true);
  })
}

function uploadFile(url, file, callback) {
  return fetch(url, {
    method: 'PUT',
    body: file,
  })
  // .then(res => res.json())
  .then((result) => {
    callback("success");
  }, (error) => {
    callback(error, true);
  })
}

function singleUpload(file, callback) {
  getSignedUrl((result) => {
    uploadFile(result.signed_url, file, callback);
  });
}

function bulkUpload(files, callback) {
  const signedUrls = [];
  const uploaded = []; //list of file name that was uploaded successfully
  
  Promise.allSettled(files.map(() => getSignedUrl((result) => { signedUrls.push(result) }))).then(() => {
    const uploads = [];
    for (let i = 0; i < signedUrls.length; ++i) {
      uploads.push(uploadFile(signedUrls[i]?.signed_url, files[i], (result) => {
        if (result === "success") {
          uploaded.push(signedUrls[i]?.file_name)
        }
      }));
    }

    Promise.allSettled(uploads).then((result) => {
      // debugger;
      callback(uploaded);
    });
  });
}

export { bulkUpload, singleUpload };
