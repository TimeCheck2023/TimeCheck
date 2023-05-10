import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingUp } from "./pages/SingUp/SingUp";
import { SingIn } from "./pages/SingIn/SingIn";
import { Contact } from "./pages/Contact/Contact";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Statistics } from "./pages/Statistics/Statistics";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Statistics" element={<Statistics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
