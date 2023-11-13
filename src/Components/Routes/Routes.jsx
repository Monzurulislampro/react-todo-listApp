import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
  const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/about",
                element: <h1>Hello about Page</h1>
            },
            {
                path: "/services",
                element: <h1>Hello services Page</h1>
            }
        ]
    },
    {
        path: "/contact",
        element: <h1>Hello contact Page</h1>,
    }
  ]);
  export default router;