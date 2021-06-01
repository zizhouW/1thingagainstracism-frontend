function getActions(callback) {
  return fetch("https://1-thing.org/actions?orderBy=time")
      .then(res => res.json())
      .then(
        (result) => {
          callback(result?.actions);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          callback(error, true);
        }
      )
}

export { getActions };
