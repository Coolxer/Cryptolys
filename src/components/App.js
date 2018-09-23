import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';

import Menu from './Menu';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
