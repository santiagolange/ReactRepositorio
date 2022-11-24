import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import App from './App';
import Initial from './pages/Initial';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Initial />
  </React.StrictMode>
);


reportWebVitals();
