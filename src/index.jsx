import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css';
import './css/fonts.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Settings';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <App /> 
    </ContextProvider>
    
    </BrowserRouter>
   
  </React.StrictMode>
);


