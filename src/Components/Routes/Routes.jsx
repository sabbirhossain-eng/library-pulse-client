import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../ErrorElement/ErrorElement";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import Business from "../Pages/CategoriesPage/Business";
import Biographies from "../Pages/CategoriesPage/Biographies";
import History from "../Pages/CategoriesPage/History";
import Religion from "../Pages/CategoriesPage/Religion";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/CategoriesPage/Details/Details";

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/Biographies",
        element: <Biographies></Biographies>,
      },
      {
        path: "/History",
        element: <History></History>,
      },
      {
        path: "/Religion",
        element: <Religion></Religion>,
      },
      {
        path: "/business",
        element: <Business></Business>,
      },
    ],
  },
]);

export default router;
