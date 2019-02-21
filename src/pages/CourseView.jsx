import React, { Component } from "react";
import Aux from "../hoc/Aux";
import CourseInfo from "../components/CourseInfo/CourseInfo";
import AssignmentsContainer from "../containers/AssignmentsContainer/AssignmentsContainer";
import "./CourseView.scss";
import fire from "../config/Fire";

class CourseView extends Component {
  state = {
    course: null
  };

  componentDidMount() {
    this.coursesListener();
    this.setState({ course: this.props.course });
  }

  coursesListener = () => {
    const uid = this.props.uid ? this.props.uid : null;
    const dbref = fire
      .database()
      .ref("users/" + uid + "/courses/" + this.props.course.id);
    dbref.on("value", snap => {
      this.setState({ course: snap.val() });
    });
  };

  render() {
    return (
      <Aux>
        <div className="container-fluid">
          <div className="row course-view">
            <CourseInfo course={this.state.course} uid={this.props.uid} />
            <AssignmentsContainer course={this.state.course} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default CourseView;
