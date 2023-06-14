import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar";
import RepoDetails from "../Pages/RepoDetails";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <RepoDetails />,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
