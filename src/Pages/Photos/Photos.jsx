import React from 'react';

import s from './Photos.module.scss';
import Photo from '../../Component/Photo/Photo';
import PostData from '../../PostData';
import { useData } from '../../hoocks/useData';
import { useParams } from 'react-router-dom';
import Form from '../../Component/Form/Form';
import { useSearch } from '../../hoocks/useSearch';

function Photos() {
  const [search, setSearch] = React.useState('');

  const { id } = useParams();
  const [photos, setPhotos] = React.useState([]);
  const [fetching, isLoading, error] = useData(async () => {
    const { data } = await PostData.getPhotos(id);
    setPhotos(data);
  });
  React.useEffect(() => {
    fetching(id);
  }, []);

  const photosSearch = useSearch(photos, search);
  if (isLoading) {
    return <h1 style={{ textAlign: 'center' }}>loading...</h1>;
  }

  return (
    <div className={s.root}>
      <Form search={search} setSearch={setSearch} />
      <div className={s.content}>
        {photosSearch.map((photo) => (
          <Photo {...photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
}

export default Photos;
