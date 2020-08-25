import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: teal[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <Dashboard />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;