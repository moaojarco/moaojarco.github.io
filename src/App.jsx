import Home from "./pages/Home";
import Sou from "./pages/Sou";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Sou />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
