import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Cat from '../Cat/Cat';
import './App.css';

// TODO : create an array of cats

class App extends Component {
  render() {
    // TODO : use cats array to replace the three cats below

    return (
      <div className="App">
        <PageHeader>
          React Training <small>stage 2</small>
        </PageHeader>

        <Cat name="Pinkie" age={3} />
        <Cat name="Lincoln" age={5} meowsPerHour={11} />
        <Cat name="Sparkle" age={8} meowsPerHour={8} />
      </div>
    );
  }
}

export default App;
