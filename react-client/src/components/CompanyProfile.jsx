import React from 'react';

var CompanyProfile = (props) => (
  console.log('profile props: ', props.currentCompany),
  <div className="company-profile">
    <div>
      <h3 className="company-profile-name">
        {props.currentCompany.name}
      </h3>

      <ul className="company-profile-data">
        <li>Homepage: {props.currentCompany.homepage_url}</li>
        <li>Facebook: {props.currentCompany.facebook_url}</li>
        <li>Twitter: {props.currentCompany.twitter_url}</li>
        <li>LinkedIn: {props.currentCompany.linkedin_url}</li>
        <li>City: {props.currentCompany.location_city}</li>
        <li>State: {props.currentCompany.location_region}</li>
        <li>What we do: {props.currentCompany.short_description}</li>
        <li>Funding total (2015): {props.currentCompany.funding_total_usd}</li>
        <li>Most recent funding: {props.currentCompany.last_funding_at}</li>
      </ul>

      <li>
        Tags: 
        {(props.currentCompany.category_list)
          .split('|')
          .map((tag, i) => 
            (<button key={i}>{tag}</button>)
        )}
      </li>

    </div>
  </div>
);

export default CompanyProfile;
