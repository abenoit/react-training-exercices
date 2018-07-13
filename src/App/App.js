import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Cat from '../Cat/Cat';
import CatForm from '../Cat/CatForm';
import './App.css';

export const themes = {
  light: {
    textColor: '#000000',
    background: '#eeeeee'
  },
  dark: {
    textColor: '#ffffff',
    background: '#222222'
  }
};

// TODO create a ThemeContext

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      theme: themes.light
    };

    this.addCat = this.addCat.bind(this);
  }

  componentDidMount() {
    fetch('./cats.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ cats: data });
      });
  }

  addCat(cat) {
    this.setState({ cats: [...this.state.cats, cat] });
  }

  render() {
    // TODO : handle onClick to toggle the theme in a function
    // TODO : add the Provider tag
    // TODO : add the background and color to the App
    return (
      <div className="App" style={{}}>
        <PageHeader>
          React Training{' '}
          <small>
            stage 8 -
            <span onClick={() => console.log('todo')} className="theme-changer">
              Change theme
            </span>
          </small>
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
              meow={() => {
                console.log('meow from app');
              }}
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
