

// remain stateless

import React from 'react';
import CompanyListItem from './CompanyListItem.jsx';

var CompanyList = ({company, handleCompanyEntryClick}) => (
  <div className="company-list">
    {companies.map((company) =>
      <companyListEntry
        key={company.etag}
        company={company}
        handleCompanyEntryClick={handleCompanyEntryClick}
      />
    )}
  </div>
);


CompanyList.propTypes = {
  companies: React.PropTypes.array.isRequired
};

// window.VideoList = VideoList;

export default CompanyList;

