import React from 'react';
import $ from 'jquery';
import CompanyList from './CompanyList.jsx';
import Search from './Search.jsx';
import CompanyProfile from './CompanyProfile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      companies: [],
      currentCompany: {name: 'Pfizer'}
    }
  }

  handleCompanyItemClick(company) {
    this.setState({
      currentCompany: company
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/companies', 
      success: (data) => {
        console.log(data);
        this.setState({
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
          handleCompanyItemClick={this.handleCompanyItemClick.bind(this)}
        />
        <CompanyProfile 
          company={this.state.currentCompany}
        />
      </div>
    );
  }
}

export default App;

