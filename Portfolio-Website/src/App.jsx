import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Laout } from "./layouts/Laout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
