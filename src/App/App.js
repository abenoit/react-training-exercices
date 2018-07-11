import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Cat from '../Cat/Cat';
import CatForm from '../Cat/CatForm';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: []
    };

    this.addCat = this.addCat.bind(this);
  }

  addCat(cat) {
    this.setState({ cats: [...this.state.cats, cat] });
  }

  render() {
    return (
      <div className="App">
        <PageHeader>
          React Training <small>stage 5</small>
        </PageHeader>

        <CatForm addCat={this.addCat} />

        {this.state.cats.length > 0 ? (
          this.state.cats.map(cat => (
            <Cat
              key={cat.name}
              name={cat.name}
              age={cat.age}
              meowsPerHour={cat.meowsPerHour}
              color={cat.color}
            />
          ))
        ) : (
          <div
            style={{ padding: '20px 0', fontSize: '2em', color: 'deeppink' }}
          >
            No cat to display
          </div>
        )}
      </div>
    );
  }
}

export default App;
