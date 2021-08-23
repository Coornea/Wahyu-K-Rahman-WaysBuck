import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Headers from "./components/Navbar/Headers";
import PrivateRoute from "./components/Route/PrivateRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Transaction from "./pages/Transaction";
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  async function init() {
    const dataAllUser = await require("./data/Users.json");
    const dataAllProduct = await require("./data/Products.json");
    const dataAllTopping = await require("./data/Toppings.json");
    const ProductnTopping = dataAllProduct.map((data) => ({
      ...data,
      toppings: dataAllTopping,
    }));
    window.localStorage.setItem("dataAllUsers", JSON.stringify(dataAllUser));
    window.localStorage.setItem(
      "dataAllProducts",
      JSON.stringify(ProductnTopping)
    );
  }
  init();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Router>
      <Headers />
      <div style={{ marginTop: "120px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/transaction" component={Transaction} />
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
