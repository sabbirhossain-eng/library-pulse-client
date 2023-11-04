import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;