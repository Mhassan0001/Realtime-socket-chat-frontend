import React from "react";
import { Outlet } from "react-router";
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
