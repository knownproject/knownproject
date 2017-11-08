import React from 'react';

var CompanyProfile = (props) => (
  console.log('profile props: ', props.currentCompany),
  <div className="company-profile">
    <div>
      <h3 className="company-profile-name">
        {props.currentCompany.name}
      </h3>

      <ul className="company-profile-data">
        <li>{props.currentCompany.homepage_url}</li>
        <li>{props.currentCompany.facebook_url}</li>
        <li>{props.currentCompany.twitter_url}</li>
        <li>{props.currentCompany.linkedin_url}</li>
        <li>{props.currentCompany.location_city}</li>
        <li>{props.currentCompany.location_region}</li>
        <li>{props.currentCompany.short_description}</li>
        <li>{props.currentCompany.category_list}</li>
        <li>{props.currentCompany.funding_total_usd}</li>
        <li>{props.currentCompany.last_funding_at}</li>
      </ul>
    </div>
  </div>
);

export default CompanyProfile;
