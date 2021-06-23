import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Educator from './Educator';
import Demo from './Demo';
import State4 from './State4';
import Vali from './Vali';
import Ax from './Ax';
import gentable from './Jsxdemo';
import generateTable from './jsxdemo2';
import getEmployeeDetails from './Binddemo';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Educator name='more' />,
    // getEmployeeDetails(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
