import React from 'react';
import LoadingGif from './loading.gif';
import './Loading.scss';

function Loading() {
  return (
    <div className="loading">
      <img src={LoadingGif} alt="Loading..." />
    </div>
  );
}

export default Loading;
