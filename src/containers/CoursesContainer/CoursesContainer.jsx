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

  componentDidMount() {}

  shouldComponentUpdate(next, newp) {
    if (next.courses !== newp.courses) this.setState({ courses: next.courses });
    return true;
  }

  render() {
    let courses = null;
    if (this.state.courses) {
      courses = Object.keys(this.state.courses).map(course => {
        const assignmentCount = this.state.courses[course].assignments
          ? Object.keys(this.state.courses[course].assignments).length
          : 0;
        return (
          <CourseTile
            courseName={this.state.courses[course].name}
            key={this.state.courses[course].id}
            assignmentCount={assignmentCount}
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
