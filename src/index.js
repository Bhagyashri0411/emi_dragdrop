import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css'; 
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const container = ReactDOMClient.createRoot(document.getElementById("root"));
container.render(<App />);