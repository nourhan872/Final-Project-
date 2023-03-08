import './bootstrap';


import React from 'react';

import  ReactDOM  from 'react-dom';

import { Login } from './components/Login';

if(document.getElementById('login')){
    ReactDOM.render(<Login/>,document.getElementById('login'));
    // ReactDOM.render(<Login/>,document.getElementById('app'));
    // ReactDOM.render(<Navbar/>,document.getElementById('app'));
    // ReactDOM.render(<Register/>,document.getElementById('app'));
}

