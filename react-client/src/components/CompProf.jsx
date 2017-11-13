import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const style = {
  height: 460,
  width: 650,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const CompProf = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Paper style={style} zDepth={2}>
        <h2 className="company-profile-name">
          {props.currentCompany.name}
        </h2>


          <h4>What we do: {props.currentCompany.short_description}</h4>
          <h5>Homepage: {props.currentCompany.homepage_url}</h5>

          {!!(props.currentCompany.linkedin_url) &&
            <a href={props.currentCompany.linkedin_url}>
              <img src="/link.png
              " />
            </a>
          }

          {!!(props.currentCompany.twitter_url) &&
            <a href={props.currentCompany.twitter_url}>
              <img src="/twitter.png" />
            </a>
          }

          {!!(props.currentCompany.facebook_url) &&
            <a href={props.currentCompany.facebook_url}>
              <img src="/facebook.png" />
            </a>
          }

          <h5>City: {props.currentCompany.location_city}</h5>
          <h5>State: {props.currentCompany.location_region}</h5>
          <h6>Funding total (2015): {props.currentCompany.funding_total_usd}</h6>
          <h6>Most recent funding: {props.currentCompany.last_funding_at}</h6>


        <li>
          Tags:
          {(props.currentCompany.category_list)
            .split('|')
            .map((tag, i) =>
              (<button onClick={() => props.handleTagClick(tag)} key={i}>{tag}</button>)
          )}
        </li>
        <button onClick={() => props.handleTagClick(null)}>Reset</button>
      </Paper>
    </div>
  </MuiThemeProvider>
);

export default CompProf;
