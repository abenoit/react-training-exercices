import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          React Training <small>stage 1</small>
        </PageHeader>

        <span className="todo">TODO : Give me some cats here ! </span>
      </div>
    );
  }
}

export default App;
