import React from 'react';
import $ from 'jquery';
import CompanyList from './CompanyList.jsx';
import Search from './Search.jsx';
import CompanyProfile from './CompanyProfile.jsx';

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
          currentCompany: data[0]
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    if(this.state.currentCompany) {
      return (
        <div>
          <Search
            handleSearchInputChange={this.handleSearchInputChange}
          />
          <CompanyList
            companies={this.state.companies}
            handleCompanyItemClick={this.handleCompanyItemClick}
          />
          <CompanyProfile
            handleTagClick={this.handleTagClick}
            currentCompany={this.state.currentCompany}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Search
            handleSearchInputChange={this.handleSearchInputChange}
          />
          <CompanyList
            companies={this.state.companies}
            handleCompanyItemClick={this.handleCompanyItemClick}
          />
        </div>
      );
    }
  }
}

export default App;
