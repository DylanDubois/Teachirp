import React, { Component } from "react";
import Aux from "../hoc/Aux";
import CoursesContainer from "../containers/CoursesContainer/CoursesContainer";
import "./Home.scss";
import { Route } from "react-router-dom";
import AddCourseModal from "../components/AddCourse/AddCourse";

class Home extends Component {
  state = {
    user: {
      displayName: "Dylan"
    },
    courses: []
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({
      courses: this.props.courses
    });
  }

  shouldComponentUpdate(next, newp) {
    if (next.courses !== newp.courses) this.setState({ courses: next.courses });
    if (next.user !== newp.user) this.setState({ user: next.user });
    return true;
  }

  render() {
    const userId = this.props.user ? this.props.user.uid : null;
    const userName = this.state.user
      ? this.state.user.displayName.split(" ")[0]
      : "  ";
    return (
      <Aux>
        <div className="jumbotron gradient jumbotron-fluid bg-dark text-white border-bottom border-primary">
          <div className="container">
            <h1 className="display-4 header">
              Welcome, <span className="text-primary">{userName}</span>!
            </h1>
            <p className="lead">See all that there is to do!</p>
            <AddCourseModal uid={userId} />
          </div>
        </div>
        <Route
          path="/dashboard"
          exact
          render={() => (
            <CoursesContainer
              courseSelected={this.props.courseSelected}
              courses={this.props.courses}
            />
          )}
        />
      </Aux>
    );
  }
}

export default Home;
