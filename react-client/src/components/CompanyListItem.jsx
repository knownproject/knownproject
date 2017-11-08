
// remain stateless

import React from 'react';

const CompanyListItem = (props) => (
  <div onClick={props.handleCompanyItemClick}>{props.company}</div>
)

export default CompanyListItem;