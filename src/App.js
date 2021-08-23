import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Headers from "./components/Navbar/Headers";
import Home from "./pages/Home";
// import PrivateRoute from './components/Route/PrivateRoute';

function App() {
  return (
    <Router>
      <Headers />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Home} />
        {/* <PrivateRoute exact path='/profile' component={Profile} /> */}
      </Switch>
    </Router>
  );
}

export default App;
