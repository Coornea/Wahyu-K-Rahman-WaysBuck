import Headers from "./components/Navbar/Headers";
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <Router>
      <Headers/>

      <Switch>
         <Route exact path="/" component={Home}/>
      </Switch>
      </Router>
  );
}

export default App;
