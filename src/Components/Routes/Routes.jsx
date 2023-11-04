import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../ErrorElement/ErrorElement";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";

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
        }
      ]
    },
  ]);

export default router;