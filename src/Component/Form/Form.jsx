import React from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import s from './Form.module.scss';

function Form({ serch, setSearch }) {
  return (
    <div className={s.root}>
      <MyInput
        value={serch}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search albums"
        type="text"
      />
    </div>
  );
}

export default Form;
