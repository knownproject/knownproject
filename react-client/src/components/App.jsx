import React from 'react';
import $ from 'jquery';
// import CompanyList from './components/CompanyList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      // currentCompany: companies[0]
    }
  }

  handleCompanyListTitleClick(company) {
    this.setState({
      currentCompany: company
    });
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/companies', 
  //     success: (data) => {
  //       this.setState({
  //         companies: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}



/*
        <Search />
        <CompanyList 
          companies={this.state.companies}
          handleCompanyListTitleClick{this.handleVideoListEntryTitleClick.bind(this)}
        />
        <CompanyProfile />
    return (
      <div>
        <nav className="navbar">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Search
              handleSearchInputChange={this.getYouTubeVideos.bind(this)}
            />
          </div>
        </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
          {
            * It's very important to bind the context of this callback.
            * Also acceptable is to pass a anonymous function expression with a fat
            * arrow that inherits the surrounding lexical `this` context:
            *
            *   handleVideoListEntryTitleClick={(video) => this.onVideoListEntryClick(video)}
            *                                  - or -
            *   handleVideoListEntryTitleClick={(currentVideo) => this.setState({currentVideo})}
            *
            }
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );

    */


export default App;

