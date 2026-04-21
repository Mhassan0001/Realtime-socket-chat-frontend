import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
const App = () => {
  const location = useLocation();
  const hideNav = location.pathname.startsWith("/dashboard");
  return (
    <>
      <main>
        {!hideNav && <Nav />}
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default App;
