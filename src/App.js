import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Footer from "./Footer";
import Signup from "./Signup";
import Men from "./Men";
import Women from "./Women";
import Sneakers from "./Sneakers";
import Watches from "./Watches";
import Electronics from "./Electronics";

function App() {
  return (
    <Router basename="/react-project">
      <div className="app">
        <Switch>
          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>

          <Route path="/men">
            <Header />
            <Men />
            <Footer />
          </Route>

          <Route path="/women">
            <Header />
            <Women />
            <Footer />
          </Route>

          <Route path="/sneakers">
            <Header />
            <Sneakers />
            <Footer />
          </Route>

          <Route path="/watches">
            <Header />
            <Watches />
            <Footer />
          </Route>

          <Route path="/electronics">
            <Header />
            <Electronics />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
