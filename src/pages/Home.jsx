import React from "react";
import Menu from "../components/Menu";
import Broadway from "../components/Broadway";
import Konsultatsiya from "../components/Konsultatsiya";
import Oqituvchi from "../components/Oqituvchi";

function Home() {
  return (
    <>
      <Menu />
      <Broadway />
      <Konsultatsiya />
      {/* <Oqituvchi /> */}
    </>
  );
}

export default Home;
