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
      currentCompany: {name: 'Pfizer'}
    }
    this.handleCompanyItemClick = this.handleCompanyItemClick.bind(this);
  }

  handleCompanyItemClick(company) {
    this.setState({
      currentCompany: company
    });
  }

  componentDidMount() {
    var context = this;
    $.ajax({
      url: '/companies', 
      success: (data) => {
        console.log('success', data),
        context.setState({
          companies: data
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
        <Search />
        <CompanyList 
          companies={this.state.companies}
          handleCompanyItemClick={this.handleCompanyItemClick}
        />
        <CompanyProfile 
          company={this.state.currentCompany}
        />
      </div>
    );
  }
}

export default App;

