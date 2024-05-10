import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Books from "../Pages/Books";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import DashBoardLayout from "../Pages/admin/DashBoardLayout";
import Dashboard from "../Pages/admin/Dashboard";
import EditBook from "../Pages/admin/EditBook";
import LogIn from "../Pages/admin/LogIn";
import LogOut from "../Pages/admin/LogOut";
import ManageBook from "../Pages/admin/ManageBook";
import UploadBook from "../Pages/admin/UploadBook";
import BookDetails from "../components/Home/BookDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://book-store-server-delta.vercel.app/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LogIn />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard/uploadBook",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manageBook",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/editBook/:id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`https://book-store-server-delta.vercel.app/book/${params.id}`),
      },
      {
        path: "/admin/dashboard/logout",
        element: <LogOut />,
      },
    ],
  },
]);

export default router;
