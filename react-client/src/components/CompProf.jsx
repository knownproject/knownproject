import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 460,
  width: 650,
  padding: 20,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


const CompProf = (props) => (
  console.log(props.currentCompany.homepage_domain),
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Paper style={style} zDepth={2}>
        <h2 className="company-profile-name">
          {props.currentCompany.name}
        </h2>
          <a href={props.currentCompany.homepage_url} target="_blank">
            <img src={"https://logo.clearbit.com/" + props.currentCompany.homepage_domain} />
          </a>
          <h4>What we do: {props.currentCompany.short_description}</h4>

          {!!(props.currentCompany.linkedin_url) &&
            <a href={props.currentCompany.linkedin_url} target="_blank">
              <img src="/link.png
              " />
            </a>
          }

          {!!(props.currentCompany.twitter_url) &&
            <a href={props.currentCompany.twitter_url} target="_blank">
              <img src="/twitter.png" />
            </a>
          }

          {!!(props.currentCompany.facebook_url) &&
            <a href={props.currentCompany.facebook_url} target="_blank">
              <img src="/facebook.png" />
            </a>
          }

          <h5>State: {props.currentCompany.location_region}</h5>
          <h6>Funding total (2015): ${props.currentCompany.funding_total_usd}</h6>
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
