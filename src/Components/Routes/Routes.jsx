import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../ErrorElement/ErrorElement";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addBook',
            element: <AddBook></AddBook>
        },
        {
            path: '/allBooks',
            element: <AllBooks></AllBooks>
        },
        {
            path: '/borrowedBooks',
            element: <BorrowedBooks></BorrowedBooks>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    },
  ]);

export default router;