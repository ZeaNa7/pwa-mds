import { createBrowserRouter } from 'react-router-dom';
import CameraPage from './pages/camera-page';
import HomePage from './pages/home-page';
import MapPage from './pages/map-page';
import PicturePage from './pages/picture-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/camera',
    element: <CameraPage />,
  },
  {
    path: '/pictures',
    element: <PicturePage />,
  },
  {
    path: '/map',
    element: <MapPage />,
  },
]);
