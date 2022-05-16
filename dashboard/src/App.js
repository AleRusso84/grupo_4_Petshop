import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import UsersScreen from "./screens/UsersScreen";
import ProductsScreen from "./screens/ProductsScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/products" component={ProductsScreen} />
          <Route exact path="/users" component={UsersScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
