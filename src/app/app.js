import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIconButton from './AppBarExampleIconButton';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIconButton />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);