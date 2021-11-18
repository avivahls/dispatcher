import React from "react";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <ProtectedRoute path="/home" component={Home} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
