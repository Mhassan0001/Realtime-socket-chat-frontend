import React from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <main>
        <Nav/>
        <Outlet />
      </main>
    </>
  );
};

export default App;
