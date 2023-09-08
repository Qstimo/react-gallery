import React from 'react';
import s from './MyInput.module.scss';
function MyInput({ children, ...props }) {
  return (
    <input className={s.style} {...props}>
      {children}
    </input>
  );
}

export default MyInput;
