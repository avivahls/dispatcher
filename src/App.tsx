import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <ProtectedRoute path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
