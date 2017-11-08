
// remain stateless

import React from 'react';

const CompanyListItem = (props) => (
  <div onClick={handleCompanyItemClick}>{props.company.name}</div>
)

export default CompanyListItem;