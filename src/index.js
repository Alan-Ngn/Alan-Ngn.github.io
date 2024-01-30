import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Modal, ModalProvider } from './context/modal';
import TransformProvider from './context/transform.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(TransformProvider, null,
        React.createElement(ModalProvider, null,
            React.createElement(App, null),
            React.createElement(Modal, null)))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
