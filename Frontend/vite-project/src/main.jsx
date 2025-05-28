import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import UserContext from './Context/userContext'
import CaptainContext from './Context/CaptainContext'

// Use the correct named export

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
    <UserContext> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
    </CaptainContext>
  </StrictMode>
);
