import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './scss/App.scss';


const appDom = document.getElementById('app');
ReactDom.render(<App/>, appDom)