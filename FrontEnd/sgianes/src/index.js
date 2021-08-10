import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Pages/Login';
import Home from './Pages/Home';
import Salas from './Pages/Salas'
import Equipamentos from './Pages/Equipamentos'

import './index.css';

import reportWebVitals from './reportWebVitals';

const route = (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Home' component={Home}/>
      <Route path='/Salas' component={Salas}/>
      <Route path='/Equipamentos' component={Equipamentos}/>
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(
  route,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
