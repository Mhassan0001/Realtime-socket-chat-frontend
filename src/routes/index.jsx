import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

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

        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
