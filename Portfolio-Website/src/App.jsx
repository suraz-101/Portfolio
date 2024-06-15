import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";
import { Laout } from "./layouts/Laout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
