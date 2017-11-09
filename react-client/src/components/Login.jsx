import React from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './';


var Login = (props) => (
  <div className="login-dark">
    <form method="post">
      <h2 className="sr-only">Login Form</h2>
      <div data-bs-hover-animate="wobble" className="illustration">
        <img className="icon ion-ios-locked-outline"></img>
      </div>
      <div className="form-group">
        <input className="form-control" type="email" name="email" placeholder="Email"></input>
      </div>
      <div className="form-group">
          <input className="form-control" type="password" name="password" placeholder="Password"></input>
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">Log In</button>
      </div>
      <a href="#" className="forgot">Forgot email or password?</a>
    </form>
  </div>
);

export default Login;



{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script> */}
