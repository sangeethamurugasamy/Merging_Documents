
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
// import {NavBar} from './Components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { Container } from 'react-bootstrap'
//import { BrowserRouter as Router } from 'react-router-dom'
import {Layout} from './Components/Layout';
import Login from './Components/Login';
import Checkout from './Components/Cart';
import {Sell} from './Components/Sell';
import { Footer } from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Navigation } from './Components/Styling/Navigation';
import React from 'react';
import { initializeApp } from "firebase/app";
//import { BrowserRouter, Switch, Route} from 'react-router-dom';
//import Login from './component/Login';
import Signup from './Components/Signup';


const firebaseConfig = {
  apiKey: "AIzaSyD9dTqdfQhZ4hFp0saBFLFPQc4tf3B7_-I",
  authDomain: "login-auth-337de.firebaseapp.com",
  projectId: "login-auth-337de",
  storageBucket: "login-auth-337de.appspot.com",
  messagingSenderId: "343166477280",
  appId: "1:343166477280:web:1eb48ddcf99d9a62528185",
  measurementId: "G-7R0QJR84JS"
};
initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Route path="/" component={}/> */}
        {/* <Header/>
        <NavBar/> */}
        <div className="app">
          <Switch>
            {/* <Route path="/checkout">
              <Header/>
              <h1>Hey this is checkout</h1>
            </Route> */}
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/signup" component={Signup}/>
            <Route path="/Cart"> 
            {/* component={Cart}> */}
              <Header/>
              {/* <Cart/> */}
              <Checkout/>
              <Footer/>
            </Route>
            <Route path="/Sell" component={Sell}>
              <Header/>
              <Sell/>
            </Route>
            <Route path="/">
              <Layout/>
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
      
  </div>
  );
}

export default App;

