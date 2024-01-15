import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./sass/_all.scss";
import Menu from "./components/Menu";
import Broadway from "./components/Broadway";
import Konsultatsiya from "./components/Konsultatsiya";
import { HashLoader } from "react-spinners";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kurslar from "./pages/Kurslar";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2600);
  }, []);
  return (
    <>
      {loading ? (
        <HashLoader
          color="#ffcd02"
          size={90}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <span>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurslar" element={<Kurslar />} />
          </Routes>
        </span>
      )}
    </>
  );
}

export default App;
