import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import CompanyList from './CompanyList.jsx';
import Search from './Search.jsx';
import CompanyProfile from './CompanyProfile.jsx';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      currentCompany: null
    }

    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleCompanyItemClick = this.handleCompanyItemClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleCompanyItemClick(company) {
    this.setState({
      currentCompany: company
    });
  }

  handleTagClick(tagButton) {
    console.log('clicked');
    var context = this;
    $.ajax({
      url: '/companies',
      data: {
        tagCategory: tagButton,
      },
      success: (data) => {
        console.log('ajax success data: ', data)
        context.setState({
          companies: data,
          currentCompany: data[0]
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleSearchInputChange(searchInput) {
    var context = this;
    $.ajax({
      url: '/companies',
      data: {
        searchText: searchInput,
      },
      success: (data) => {
        // console.log('ajax success data: ', data)
        context.setState({
          companies: data,
          currentCompany: data[0]
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    var context = this;
    $.ajax({
      url: '/companies',
      data: {},
      success: (data) => {
        // console.log('ajax success data: ', data)
        context.setState({
          companies: data,
          currentCompany: null
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {

    return (
      <div>
        <div className="jumbotron">
          <h1 className="title">The Known Project</h1>
          <p>...and if you don't know, now you Known....</p>
        </div>

        <Search
          handleSearchInputChange={this.handleSearchInputChange}
        />

        <CompanyList
          companies={this.state.companies}
          handleCompanyItemClick={this.handleCompanyItemClick}
        />

        {this.state.currentCompany ? <CompanyProfile handleTagClick={this.handleTagClick} currentCompany={this.state.currentCompany}
          />
          : null}
      </div>
      );
    }

}

export default App;
