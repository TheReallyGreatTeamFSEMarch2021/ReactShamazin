import logo from './logo.svg';
import './App.css';
import Shamazin from './components/Shamazin/Shamazin';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import React from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar'
//Every <Route> that matches the location renders inclusively
//<Switch> is unique - renders a route exclusively

function App() {
  return(
    <Router>
      <div> 
        <NavBar/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Shamazin}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
