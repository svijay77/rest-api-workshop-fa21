import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NewEventForm from './components/NewEventForm';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import {Container, Nav} from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Container>
      <NewEventForm/>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
