import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import './styles/variables.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
<BrowserRouter basename="/responsive-site">
<App />
</BrowserRouter>
</React.StrictMode>
);

reportWebVitals();