import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={ <App />}/>
  </Routes>
  </React.StrictMode>
  </HashRouter>
);
