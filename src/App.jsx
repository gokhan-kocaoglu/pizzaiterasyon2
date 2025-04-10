import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/siparis">
          <OrderPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
