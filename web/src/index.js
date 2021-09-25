import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import {Container} from "react-bootstrap";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
