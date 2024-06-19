import { useContext } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";
import { toggleContext } from "./context/toggleContext";
import { Laout } from "./layouts/Laout";

function App() {
  const { toggle, setToggle } = useContext(toggleContext);

  return (
    <div className={`${toggle}`}>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
