import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";
import Index from "./components/layout/Index";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
