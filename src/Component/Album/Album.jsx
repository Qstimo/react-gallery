import React from 'react';
import s from './Album.module.scss';
import { Link } from 'react-router-dom';

function Album({ title, id, user }) {
  return (
    <Link to={`/photos/${id}`}>
      <div className={s.albumContainer}>
        <span>~{id}~</span>
        <p className={s.title}> {title} </p>
        <p className={s.name}>{user}</p>
      </div>
    </Link>
  );
}

export default Album;
