import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = ({companies, handleCompanyItemClick}) => (
  <div className="company-list">
    {companies.map((company) =>
      <companyListItem
        key={company.uuid}
        company={company}
        handleCompanyItemClick={handleCompanyItemClick}
      />
    )}
  </div>
);

export default CompanyList;

