import { createBrowserRouter } from "react-router";
import App from "../App";
import SignUp from "../components/SignUp";
import About from "../components/About";
import Nav from "../components/Nav";
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
        path: "/home",
        element: <SignUp />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
