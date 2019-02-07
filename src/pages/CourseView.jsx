import React, { Component } from "react";
import Aux from "../hoc/Aux";
import CourseInfo from "../components/CourseInfo/CourseInfo";
import AssignmentsContainer from "../containers/AssignmentsContainer/AssignmentsContainer";
import "./CourseView.scss";

class CourseView extends Component {
  state = {
    course: null
  };
  componentDidMount() {
    console.log(this.props);
    const { course } = this.props;
    this.setState({ course });
  }
  render() {
    return (
      <Aux>
        <div className="container-fluid">
          <div className="row course-view">
            <CourseInfo course={this.state.course} />
            <AssignmentsContainer course={this.state.course} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default CourseView;
