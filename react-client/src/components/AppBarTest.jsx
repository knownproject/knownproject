import React from 'react';
import {blueGrey500} from 'material-ui/styles/colors';
import {blueGrey700} from 'material-ui/styles/colors';
import {brown100} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import home from 'material-ui/svg-icons/alert/error';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import ReactLogin from './ReactLogin.jsx';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey700,
    accent1Color: blueGrey500,
    alternateTextColor: brown100,
  },
  appBar: {
    height: 70,
  },
});

const AppBarTest = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="The Known Project" subtitle=""
      // iconClassNameRight="AccountCircle"
      // iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<ReactLogin secondary={true} label="LOG IN" />}
      style={{
        textAlign: 'center',

      }}
    />
  </MuiThemeProvider>
);

export default AppBarTest;
