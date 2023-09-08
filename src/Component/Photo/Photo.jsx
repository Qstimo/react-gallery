import React from 'react';
import s from './Photo.module.scss';

function Photo({ url, title }) {
  return (
    <div className={s.content}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Photo;
