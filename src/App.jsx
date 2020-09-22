import React from "react";
import ShopPage from "./pages/shopPage/shopPage.component";
import HomePage from "./pages/homePage/homePage.component";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
      </Switch>
    </div>
  );
}

export default App;
