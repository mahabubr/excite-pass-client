import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Events from "../Pages/Events/Events";
import Category from "../Component/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <Events />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
]);

export default router;
