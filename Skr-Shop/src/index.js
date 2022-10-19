import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import '../node_modules/antd/dist/antd.min.css'
import {BrowserRouter,useLocation} from 'react-router-dom'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter><App /></BrowserRouter>
);

