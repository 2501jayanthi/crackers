import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Customer from "./components/Customer";
import Products from "./components/Products";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/customer" component={Customer} />
    <Route exact path="/products" component={Products} />
    <Route component={NotFound} />
  </Switch>
);
export default App;
