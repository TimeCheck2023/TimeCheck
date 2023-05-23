import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingUp } from "./pages/SingUp/SingUp";
import { SingIn } from "./pages/SingIn/SingIn";
import { Contact } from "./pages/Contact/Contact";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { AddSubOrg } from "./pages/AddSubOrg/AddSubOrg";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Statistics } from "./pages/Statistics/Statistics";
import { ToastContainer } from "react-toastify";
import { ProfileUser } from "./components/Layout/ProfileUser/ProfileUser";
import { Notifications } from "./pages/Notifications/Notifications";
import { Terminos } from "./pages/Terminos/Terminos";
import { Politicas } from "./pages/Politicas/Politicas";
import { ViewSubOrg } from "./pages/ViewSubOrg/ViewSubOrg";
import { SubOrgView } from "./pages/SubOrgView/SubOrgView";

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
          <Route path="/Profile" element={<ProfileUser />} />
          <Route path="/AddSubOrg" element={<AddSubOrg />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Terminos y Condiciones" element={<Terminos />} />
          <Route path="/Politicas de Privacidad" element={<Politicas />} />
          <Route path="/ViewSubOrg" element={<ViewSubOrg />} />
          <Route path="/Suborganization/:id" element={<SubOrgView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
