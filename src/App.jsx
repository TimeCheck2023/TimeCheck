import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingUp } from "./pages/SingUp/SingUp";
import { SingIn } from "./pages/SingIn/SingIn";
import { Contact } from "./pages/Contact/Contact";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Events } from "./pages/Events/Events";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Events" element={<Events/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
