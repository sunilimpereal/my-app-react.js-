import React, { useState } from "react";
import NavBar from "../componenets/NavBar";
import SideBar from "../componenets/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toogle={toogle} />
      <NavBar toogle={toogle} />
    </>
  );
};

export default Home;
