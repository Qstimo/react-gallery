import React from 'react';
import Album from '../Album/Album';

function AlbumsRender({ items, users }) {
  return (
    <>
      {' '}
      {items.map((album) => (
        <Album {...album} key={album.id} user={users[album.userId - 1].name} />
      ))}
    </>
  );
}

export default AlbumsRender;
