import React from 'react';//core foundational lib which take all the references
import ReactDOM from 'react-dom/client';//to manipulate web dom, implementation
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// <App /> is a custom tag