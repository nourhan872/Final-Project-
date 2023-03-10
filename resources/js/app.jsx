import './bootstrap';

import React from 'react';


import App from './components/App';

import ReactDOM from "react-dom/client";

if(document.getElementById('app')){
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
}

