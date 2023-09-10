import React from 'react';
import s from './Albums.module.scss';
import { useData } from '../../hoocks/useData';
import PostData from '../../PostData';
import Album from '../../Component/Album/Album';
import Form from '../../Component/Form/Form';
import { useSearch } from '../../hoocks/useSearch';
import { getTotalPage, getTotalPageArray } from '../../PagesCount';
import MyButton from '../../UI/MyButton/MyButton';
import Pagination from '../../Component/pagination/Pagination';
import AlbumsRender from '../../Component/AlbumsRender';
import SkeletonAlbums from '../../Component/AlbumsRender/SkeletonAlbums';

function Albums() {
  const [albums, setAlbums] = React.useState([]);

  const [users, setUsers] = React.useState([]);

  const [limitPage, setLimitPage] = React.useState(12);

  const [totalPages, setTotalPages] = React.useState([]);

  const [countPage, setCountPage] = React.useState();

  const [page, setPage] = React.useState(1);

  const [search, setSearch] = React.useState('');

  const lastElemrnt = React.useRef();

  const pageChange = (page) => {
    setPage(page);
  };

  const [fetching, isLoading] = useData(async () => {
    const responseUsers = await PostData.getUsers();
    const { data, headers } = await PostData.getAlbums(limitPage, page);
    const totalCount = headers['x-total-count'];
    setCountPage(getTotalPage(totalCount, limitPage));
    setTotalPages(getTotalPageArray(countPage));
    setUsers(responseUsers.data);
    setAlbums([...albums, ...data]);
  });

  React.useEffect(() => {
    fetching();
  }, [page]);

  const searchAlbums = useSearch(albums, search);

  const observer = React.useRef();

  React.useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var cb = function (entries) {
      if (entries[0].isIntersecting && page < countPage) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(lastElemrnt.current);
  }, [isLoading]);

  // if (isLoading) {
  //   return <h1 style={{ textAlign: 'center' }}>loading...</h1>;
  // }

  return (
    <div className={s.root}>
      <Form search={search} setSearch={setSearch} />
      <div className={s.content}>
        {searchAlbums && <AlbumsRender items={searchAlbums} users={users} />}
        {isLoading && [...new Array(12)].map((_, i) => <SkeletonAlbums key={i} />)}
      </div>
      <div style={{ width: '100%', height: '2px' }} ref={lastElemrnt}></div>
      <Pagination page={page} pageChange={pageChange} totalPages={totalPages} />
    </div>
  );
}

export default Albums;
