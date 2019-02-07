import React, { Component } from "react";
import Aux from "../hoc/Aux";
import CoursesContainer from "../containers/CoursesContainer/CoursesContainer";
import "./Home.scss";
import { Route } from "react-router-dom";

class Home extends Component {
  state = {
    user: {
      name: "Dylan",
      courses: []
    }
  };

  render() {
    return (
      <Aux>
        <div className="jumbotron jumbotron-fluid bg-dark text-white border-bottom border-primary">
          <div className="container">
            <h1 className="display-4">
              Welcome,{" "}
              <span className="text-primary">{this.state.user.name}</span>!
            </h1>
            <p className="lead">See all that there is to do!</p>
          </div>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <CoursesContainer courseSelected={this.props.courseSelected} />
          )}
        />
      </Aux>
    );
  }
}

export default Home;
