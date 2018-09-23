import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu />
      </div>
    );
  }
}

export default App;
