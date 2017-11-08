import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = (props) => (
  <div className="company-list">

    {props.companies.map((company) =>
      <CompanyListItem
        key={company.crunchbase_uuid}
        company={company.name}
        handleCompanyItemClick={props.handleCompanyItemClick}
      />
    )}

  </div>
);

export default CompanyList;

// props is async and is [] until the ajax request runs,
// but the company list .map function runs before it is 
// populated so we get an error.

// need to find a way to run .map function AFTER the ajax request