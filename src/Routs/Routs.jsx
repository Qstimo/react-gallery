import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from './RoutsArray';

function Routs() {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}

export default Routs;
