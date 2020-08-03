import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout.js";
import Men from "./Men.js";
import Women from "./Women.js"
import Kid from "./Kid"

function App() {
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
          <Checkout/>
          </Route>
          <Route path="/men">
          <Header/>
          <Men/>

          </Route>
          <Route path="/women">
          <Header/>
          <Women/>

          </Route>
          <Route path="/kid">
          <Header/>
          <Kid/>

          </Route>
          <Route path="/">
            <Header/>
            <Home/>
            
            

          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
