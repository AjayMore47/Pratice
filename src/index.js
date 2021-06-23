import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Educator from './Educator';
import Empdet from './Empdet';
import CompProp from './CompProp';
import NestProp from './NestProp';


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Empdet />,
    // getEmployeeDetails(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
