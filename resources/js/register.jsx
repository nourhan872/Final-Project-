import './bootstrap';


import React from 'react';

import  ReactDOM  from 'react-dom';

import { Register } from './components/Register';
if(document.getElementById('register')){
    ReactDOM.render(<Register/>,document.getElementById('register'));
    // ReactDOM.render(<Login/>,document.getElementById('app'));
    // ReactDOM.render(<Navbar/>,document.getElementById('app'));
    // ReactDOM.render(<Register/>,document.getElementById('app'));
}

