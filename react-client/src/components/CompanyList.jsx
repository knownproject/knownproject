import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = (props) => (
  console.log(props),
  <div className="company-list">

    {props.map((company) =>
      <companyListItem
        key={company.crunchbase_uuid}
        company={company}
        handleCompanyItemClick={handleCompanyItemClick}
      />
    )}

  </div>
);

export default CompanyList;

// props is async and is [] until the ajax request runs,
// but the company list .map function runs before it is 
// populated so we get an error.

// need to find a way to run .map function AFTER the ajax request