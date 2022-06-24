import './index.css';

import { BrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // checking deprecated code for react, show warning
    // <React.StrictMode>
    <BrowserRouter>
        <Home></Home>
    </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
