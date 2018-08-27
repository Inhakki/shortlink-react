import React, { Component } from 'react';
import logo from './logo.svg';
import shorts from '../public/shorts.jpg';
import './App.css';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="page-header">
          <img src={shorts}/>
          <h1>Short shorts</h1>
          <p>Url shortener</p>
        </div>

        <div className="page-body">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
