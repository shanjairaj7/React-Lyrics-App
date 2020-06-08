import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/layout/Navbar";
import Index from "./Components/layout/Index";

import { ContextProvider } from "./Context/Apicontext";
import Lyrics from "./Components/Tracks/Lyrics";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="w-4/5 mx-auto mt-20">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route
              exact
              path="/lyrics/track/:id/:commonid"
              component={Lyrics}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
