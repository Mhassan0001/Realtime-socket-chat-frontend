import { createBrowserRouter } from "react-router";
import App from "../App";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

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
    ],
  },
]);

export default router;
