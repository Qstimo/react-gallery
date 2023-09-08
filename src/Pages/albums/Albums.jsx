import React from 'react';
import s from './Albums.module.scss';
import { useData } from '../../hoocks/useData';
import PostData from '../../PostData';
import Album from '../../Component/Album/Album';
import Form from '../../Component/Form/Form';
import { useSearch } from '../../hoocks/useSearch';

function Albums() {
  const [albums, setAlbums] = React.useState([]);

  const [users, setUsers] = React.useState([]);

  const [search, setSearch] = React.useState('');

  const [fetching, isLoading] = useData(async () => {
    const { data } = await PostData.getAlbums();
    const response = await PostData.getUsers();
    setAlbums(data);
    setUsers(response.data);
  });

  const searchAlbums = useSearch(albums, search);

  React.useEffect(() => {
    fetching();
  }, []);

  if (isLoading) {
    return <h1 style={{ textAlign: 'center' }}>loading...</h1>;
  }

  return (
    <div className={s.root}>
      <Form search={search} setSearch={setSearch} />
      <div className={s.content}>
        {searchAlbums.map((album) => (
          <Album {...album} key={album.id} user={users[album.userId].name} />
        ))}
      </div>
    </div>
  );
}

export default Albums;
