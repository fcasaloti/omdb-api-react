import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main from './omdb-main-component';
import {BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
<Router><Route path='/' exact component={Main} /></Router>,
  document.getElementById('root')
);


