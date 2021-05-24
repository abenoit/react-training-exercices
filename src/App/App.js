import { useEffect, useState } from 'react';
import Cat from '../Cat';
import CatForm from '../CatForm';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

export const themes = {
  light: {
    textColor: '#000000',
    background: '#eeeeee',
  },
  dark: {
    textColor: '#ffffff',
    background: '#222222',
  },
};

// TODO create a ThemeContext

function App() {
  const [cats, setCats] = useState([]);

  const addCat = (cat) => {
    setCats([...cats, cat]);
  };

  useEffect(() => {
    fetch('./cats.json')
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
      });
  }, []);

  // TODO : handle onClick to toggle the theme in a function
  // TODO : add the Provider tag
  // TODO : add the background and color to the App

  return (
    <div className="App" style={{}}>
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              React Training <b>stage 8</b>
              <span
                onClick={() => console.log('todo')}
                className="theme-changer"
              >
                Change theme
              </span>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <CatForm addCat={addCat} />

      {cats.length > 0 ? (
        cats.map((cat, index) => (
          <Cat
            key={index}
            name={cat.name}
            age={cat.age}
            maxMeow={cat.maxMeow}
            color={cat.color}
          />
        ))
      ) : (
        <div style={{ padding: '20px 0', fontSize: '2em', color: 'deeppink' }}>
          No cats to display
        </div>
      )}
    </div>
  );
}

export default App;
