import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Cat from '../Cat';
import './App.css';

// TODO : create an array of cats

const App = () => {
  // TODO : use cats array to replace the three cats below

  return (
    <div className="App">
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              React Training <b>stage 2</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Cat name="Pinkie" age={3} />
      <Cat name="Lincoln" age={5} maxMeows={11} />
      <Cat name="Sparkle" age={8} maxMeows={8} />
    </div>
  );
};

export default App;
