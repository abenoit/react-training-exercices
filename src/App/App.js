import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Cat from '../Cat/Cat';
import './App.css';

const cats = [
  {
    name: 'pinkie',
    age: 3,
    color: 'black'
  },
  {
    name: 'Lincoln',
    age: 5,
    meowsPerHour: 5,
    color: 'pink'
  },
  {
    name: 'Sparkle',
    meowsPerHour: 8,
    age: 8
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          React Training <small>stage 4</small>
        </PageHeader>

        {cats.map(cat => (
          <Cat
            key={cat.name}
            name={cat.name}
            age={cat.age}
            meowsPerHour={cat.meowsPerHour}
            color={cat.color}
          />
        ))}
      </div>
    );
  }
}

export default App;
