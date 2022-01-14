import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import GuestRoutes from "./utilities/GuestRoutes";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route element={<GuestRoutes />}>
          <Route path="/" exact element={<Home />}></Route>
        </Route>
        <Route element={<GuestRoutes />}>
          <Route path="/authenticate" exact elemet={<Authenticate />}></Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
