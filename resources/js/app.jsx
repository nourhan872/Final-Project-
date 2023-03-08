import './bootstrap';


import React from 'react';

import  ReactDOM  from 'react-dom';

import App from './components/App';
import { Login } from './components/Login';
import Navbar from './components/Navbar';
import { Register } from './components/Register';
if(document.getElementById('app')){
    ReactDOM.render(<App/>,document.getElementById('app'));
    // ReactDOM.render(<Login/>,document.getElementById('app'));
    // ReactDOM.render(<Navbar/>,document.getElementById('app'));
    // ReactDOM.render(<Register/>,document.getElementById('app'));
}

