import React from 'react';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class CompanySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log('SEARCH: ', props);
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      // console.log('SEARCH PROPS: ', props),
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="search-bar">
          <TextField
            hintText="Search"
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CompanySearch;
