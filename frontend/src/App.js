import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Navigation from "./components/shared/Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path=""></Route>
      </Routes>
    </Router>
  );
}

export default App;
