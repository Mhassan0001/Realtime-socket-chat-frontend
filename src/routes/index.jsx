import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
