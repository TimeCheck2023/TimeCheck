import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingUp } from "./pages/SingUp/SingUp";
import { SingIn } from "./pages/SingIn/SingIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/singIn" element={<SingIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
