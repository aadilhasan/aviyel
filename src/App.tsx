import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Demo } from "./pages/Demo";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
