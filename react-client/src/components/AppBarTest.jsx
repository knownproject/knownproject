import React from 'react';
import {teal300} from 'material-ui/styles/colors';
import {red500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import home from 'material-ui/svg-icons/alert/error';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal300,
  },
  appBar: {
    height: 90,
  },
});

const AppBarTest = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="The Known Project"
      // iconClassNameRight="AccountCircle"
      // iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<FlatButton label="LOG IN" />}
      style={{
        textAlign: 'center',
      }}
    />
  </MuiThemeProvider>
);

export default AppBarTest;
