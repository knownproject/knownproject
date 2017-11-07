import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = ({company, handleCompanyListEntryTitleClick}) => (
  <div className="company-list">
    {companies.map((company) =>
      <companyListEntry
        key={company.etag}
        company={company}
        handleCompanyListEntryTitleClick={handleCompanyListEntryTitleClick}
      />
    )}
  </div>
);


CompanyList.propTypes = {
  companies: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;

export default CompanyList;

