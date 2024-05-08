import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Books from "../Pages/Books";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import DashBoardLayout from "../admin/DashBoardLayout";
import Dashboard from "../admin/Dashboard";
import EditBook from "../admin/EditBook";
import LogIn from "../admin/LogIn";
import ManageBook from "../admin/ManageBook";
import UploadBook from "../admin/UploadBook";
import BookDetails from "../components/Home/BookDetails";

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
    element: <DashBoardLayout />,
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
    ],
  },
]);

export default router;
