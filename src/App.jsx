import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SingUp } from "./pages/SingUp/SingUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
