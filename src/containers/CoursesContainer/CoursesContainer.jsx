import React, { Component } from "react";
import CourseTile from "../../components/CourseTile/CourseTile";
import Aux from "../../hoc/Aux";
import { withRouter } from "react-router-dom";

class CoursesContainer extends Component {
  state = {
    courses: [
      { courseName: "CSC 4351", progress: 10, assignmentCount: 2, id: 1 },
      { courseName: "CSC 4103", progress: 40, assignmentCount: 3, id: 2 },
      { courseName: "CSC 2610", progress: 75, assignmentCount: 4, id: 3 },
      { courseName: "SOCL 2001", progress: 80, assignmentCount: 5, id: 4 },
      { courseName: "EDCI 1001", progress: 33, assignmentCount: 3, id: 5 }
    ]
  };

  render() {
    const courses = this.state.courses.map(course => {
      return (
        <CourseTile
          courseName={course.courseName}
          progress={course.progress}
          assignmentCount={course.assignmentCount}
          key={course.id}
          courseSelected={() => {
            this.props.courseSelected(course);
            this.props.history.push("/course/" + course.id);
          }}
        />
      );
    });

    return (
      <div className="container ">
        <div className="row">{courses}</div>
      </div>
    );
  }
}

export default withRouter(CoursesContainer);
