import { Switch, Route } from "react-router-dom";
import AboutUs from "./pages/about-us/AbuotUs";
import Home from "./pages/home/Home";
import NavBar from './components/nav-bar/NavBar';
import AllActions from "./pages/all-actions/AllActions";
import ActionDetail from "./pages/action-detail/ActionDetail";
import Propose from "./pages/propose/Propose";
import WhyAct from "./pages/why-act/WhyAct";
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/actions">
            <AllActions />
          </Route>
          <Route path="/action/:actionId">
            <ActionDetail />
          </Route>
          <Route path="/propose">
            <Propose />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/why-act">
            <WhyAct />
          </Route>
          <Route>
            not found
          </Route>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
