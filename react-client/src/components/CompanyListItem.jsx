
// remain stateless

import React from 'react';

const CompanyListItem = ({company, handleCompanyItemClick}) => (
  <div onClick={handleCompanyItemClick}>{company.name}</div>
)

export default CompanyListItem;