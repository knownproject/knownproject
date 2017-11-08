import React from 'react';

var CompanyProfile = (props) => (
  <div className="company-profile">
    <div className="company-profile-name">
      <h3>{props.company.name}</h3>
    </div>
  </div>
);

export default CompanyProfile;