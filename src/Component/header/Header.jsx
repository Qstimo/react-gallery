import React from 'react';
import s from './Header.module.scss';
import MyButton from '../../UI/MyButton/MyButton';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={s.content}>
      <ul>
        <li>
          <Link className={s.link} to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className={s.link} to={'/albums'}>
            Albums
          </Link>
        </li>
        <li>
          <Link className={s.link} to={'/photos'}>
            Photos
          </Link>
        </li>
      </ul>
      <div className={s.buttons}>
        <MyButton>Exit</MyButton>
      </div>
    </div>
  );
}

export default Header;
