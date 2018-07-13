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
    background: '#4c4c4c'
  }
};

export const ThemeContext = React.createContext(themes.dark);

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      theme: themes.light
    };

    this.addCat = this.addCat.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
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

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="App" style={{}}>
          <PageHeader style={{ backgroundColor: this.state.theme.background }}>
            React Training{' '}
            <small>
              stage 8 -
              <span onClick={this.toggleTheme} className="theme-changer">
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
      </ThemeContext.Provider>
    );
  }
}

export default App;
