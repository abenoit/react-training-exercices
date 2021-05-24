import Cat from '../Cat';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

const cats = [
  {
    name: 'pinkie',
    age: 3,
    color: 'black',
  },
  {
    name: 'Lincoln',
    age: 5,
    maxMeow: 5,
    color: 'pink',
  },
  {
    name: 'Sparkle',
    maxMeow: 8,
    age: 8,
  },
];

function App() {
  return (
    <div className="App">
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              React Training <b>stage 3</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      {cats.map((cat) => (
        <Cat
          key={cat.name}
          name={cat.name}
          age={cat.age}
          maxMeow={cat.maxMeow}
          color={cat.color}
        />
      ))}
    </div>
  );
}

export default App;
