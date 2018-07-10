import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Cat from '../Cat/Cat';
import './App.css';

class App extends Component {
  render() {
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
