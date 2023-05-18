import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToy from "../pages/AllToy/AllToy";
import MyToy from "../pages/MyToy/MyToy";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";

const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
              },
            {
                path: '/login',
                element:<Login></Login>,
              },
            {
                path: '/register',
                element:<Register></Register>,
              },
            {
                path: '/alltoy',
                element:<AllToy></AllToy>,
              },
            {
                path: '/mytoy',
                element:<MyToy></MyToy>,
              },
            {
                path: '/addatoy',
                element:<AddAToy></AddAToy>,
              },
            {
                path: '/blog',
                element:<Blog></Blog>,
              },
        ]
    }
])
export default router;