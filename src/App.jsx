import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default App;
