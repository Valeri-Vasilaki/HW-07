
// require('dotenv').config({path: "../../"});
// require('dotenv').config();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 

// console.log("REACT_APP_NOT_SECRET_CODE = " , process.env.REACT_APP_NOT_SECRET_CODE);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

