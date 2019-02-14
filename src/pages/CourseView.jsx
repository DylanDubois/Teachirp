import React, { Component } from "react";
import Aux from "../hoc/Aux";
import CourseInfo from "../components/CourseInfo/CourseInfo";
import AssignmentsContainer from "../containers/AssignmentsContainer/AssignmentsContainer";
import "./CourseView.scss";

class CourseView extends Component {
  state = {
    course: null
  };

  render() {
    return (
      <Aux>
        <div className="container-fluid">
          <div className="row course-view">
            <CourseInfo course={this.props.course} />
            <AssignmentsContainer course={this.props.course} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default CourseView;
