import React, { Component } from "react";
import CourseTile from "../../components/CourseTile/CourseTile";
import Aux from "../../hoc/Aux";
import { withRouter } from "react-router-dom";
import axios from "../../config/axios";
import fire from "../../config/Fire";

class CoursesContainer extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    console.log(this.props.courses);
  }

  shouldComponentUpdate(next, newp) {
    if (next.courses !== newp.courses) this.setState({ courses: next.courses });
    return true;
  }

  render() {
    console.log(this.props.courses);
    let courses = null;
    if (this.state.courses) {
      courses = Object.keys(this.state.courses).map(course => {
        return (
          <CourseTile
            courseName={this.state.courses[course].courseName}
            progress={this.state.courses[course].progress}
            assignmentCount={this.state.courses[course].assignmentCount}
            key={this.state.courses[course].id}
            courseSelected={() => {
              this.props.courseSelected(this.state.courses[course]);
              this.props.history.push(
                "/course/" + this.state.courses[course].id
              );
            }}
          />
        );
      });
    }

    return (
      <div className="container ">
        <div className="row">{courses}</div>
      </div>
    );
  }
}

export default withRouter(CoursesContainer);
