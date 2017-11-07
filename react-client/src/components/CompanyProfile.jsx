import React from 'react';

var CompanyProfile = ({company}) => (
  <div className="company-profile">
    <div className="company-profile-name">
      <h3>{company.name}</h3>
    </div>
  </div>
);

export default CompanyProfile;