import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
// import {NavBar} from './Components/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Layout} from './Components/Layout';
import Login from './Components/Login';
import Checkout from './Components/Cart';
import {Sell} from './Components/Sell';
import { Footer } from './Components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Navigation } from './Components/Styling/Navigation';

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
            <Route path="/Cart"> 
            {/* component={Cart}> */}
              <Header/>
              {/* <Cart/> */}
              <Checkout/>
              <Footer/>
            </Route>
            <Route path="/Sell" componrnt={Sell}>
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
