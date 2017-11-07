
// we want this to stay stateless, i think

var CompanyProfile = ({company}) => (

  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);


CompanyProfile.propTypes = {
  company: React.PropTypes.object.isRequired
};

window.CompanyProfile = CompanyProfile;