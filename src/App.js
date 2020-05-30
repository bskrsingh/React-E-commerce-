import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import './SignInApp.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList  from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import SignIn from './components/login/index';
import PageNotFound from './components/PageNotFound';
class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
