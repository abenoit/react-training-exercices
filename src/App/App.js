import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2">
              React Training <b>stage 1</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <span className="todo">TODO : Give me some cats here ! </span>
    </div>
  );
}

export default App;
