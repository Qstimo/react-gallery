import Home from "../Pages/Home/Home";
import Photos from "../Pages/Photos/Photos";
import Albums from "../Pages/albums/Albums";

export const privateRoutes = [
    { path: '/', element: Home },
    { path: '/photos/:id', element: Photos },
    { path: '/albums', element: Albums }
]