import './bootstrap';


import React from 'react';

import  ReactDOM  from 'react-dom';

import Navbar from './components/Navbar';
if(document.getElementById('navbar')){
    ReactDOM.render(<Navbar/>,document.getElementById('navbar'));
    // ReactDOM.render(<Login/>,document.getElementById('app'));
    // ReactDOM.render(<Navbar/>,document.getElementById('app'));
    // ReactDOM.render(<Register/>,document.getElementById('app'));
}

