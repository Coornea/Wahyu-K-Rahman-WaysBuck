import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Headers from "./components/Navbar/Headers";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/Route/PrivateRoute";
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Headers />
      <div style={{ marginTop: "120px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/product/:id" component={Product} />
          <PrivateRoute exact path="/addProduct" component={AddProduct} />
          <PrivateRoute exact path="/addTopping" component={AddTopping} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
