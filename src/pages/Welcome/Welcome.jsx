import React from "react";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";

const welcomePage = props => {
  let welcomeButton = (
    <Link
      className="btn btn-outline-primary btn-lg mt-3 header"
      role="button"
      to="/"
      onClick={props.signIn}
    >
      Get Started
    </Link>
  );

  if (props.userSignedIn) {
    welcomeButton = (
      <Link
        className="btn btn-outline-primary btn-lg mt-3 header"
        role="button"
        to="/dashboard"
      >
        View Dashboard
      </Link>
    );
  }
  return (
    <Aux>
      <div className="jumbotron gradient jumbotron-fluid bg-dark text-white border-bottom border-primary">
        <div className="container">
          <h1 className="display-2 brand text-primary">Teachirp</h1>
          <p className="lead">Your courses, made easy!</p>
          <p className="lead">{welcomeButton}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-12">
            <h1>Feature 1</h1>
          </div>
          <div className="col-sm-4 col-12">
            <h1>Feature 2</h1>
          </div>
          <div className="col-sm-4 col-12">
            <h1>Feature 3</h1>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default welcomePage;
