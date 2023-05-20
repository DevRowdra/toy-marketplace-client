import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AllToy from '../pages/AllToy/AllToy';
import MyToy from '../pages/MyToy/MyToy';
import AddAToy from '../pages/AddAToy/AddAToy';
import Blog from '../pages/Blog/Blog';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ToyDetails from '../pages/ToyDetails/ToyDetails';
import UpdateToy from '../pages/UpdateToy/UpdateToy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/mytoy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-livid.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: '/alltoy',
        element: <AllToy></AllToy>,
      },
      {
        path: '/mytoy',
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/addatoy',
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: '/toy/:id',
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;
