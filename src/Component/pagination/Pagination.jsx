import React from 'react';
import s from './Pagination.module.scss';

function Pagination({ page, pageChange, totalPages }) {
  return (
    <div className={s.root}>
      {totalPages.map((p) => (
        <span className={p === page ? s.active : ''} onClick={() => pageChange(p)} key={p}>
          {p}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
