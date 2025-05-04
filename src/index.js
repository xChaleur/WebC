import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Replace 'YOUR_PUBLIC_KEY' with your actual public key from EmailJS
emailjs.init('HvVpzZSkmCNu9pEsC');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

