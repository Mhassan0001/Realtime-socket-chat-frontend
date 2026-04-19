import { createBrowserRouter } from "react-router";
import App from "../App";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
