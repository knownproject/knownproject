import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = (props) => (
  <div className="company-list">

    {props.companies.map((company) =>
      <CompanyListItem
        key={company.crunchbase_uuid}
        companyObj={company}
        company={company.name}
        handleCompanyItemClick={props.handleCompanyItemClick}
      />
    )}

  </div>
);

export default CompanyList;