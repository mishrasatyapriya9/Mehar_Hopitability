import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Policy from "./pages/Policy.js";
import Pagenotfound from "./pages/Pagenotfound.js";
import Register from "./pages/Authentication/Register.js";
import Login from "./pages/Authentication/Login.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header.js";
import Footer from "./components/Layout/Footer.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
