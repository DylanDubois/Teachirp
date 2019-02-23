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

  dbref = null;

  componentDidMount() {
    this.setState({ course: this.props.course });
    this.coursesListener();
  }

  coursesListener = () => {
    const uid = this.props.uid ? this.props.uid : null;
    this.dbref = fire
      .database()
      .ref("users/" + uid + "/courses/" + this.props.course.id);
    this.dbref.on("value", snap => {
      this.calculateCourseProgress(snap.val());
    });
  };

  componentWillUnmount() {
    if (this.dbref) this.dbref.off();
  }

  calculateCourseProgress(course) {
    if (!course.assignments) return 0;
    let numTasks = 0;
    let completeTasks = 0;
    const assignmentKeys = Object.keys(course.assignments);
    for (let i = 0; i < assignmentKeys.length; i++) {
      if (!course.assignments[assignmentKeys[i]].tasks) continue;
      completeTasks += course.assignments[assignmentKeys[i]].tasks.filter(
        task => {
          return task.complete === true;
        }
      ).length;
      numTasks += course.assignments[assignmentKeys[i]].tasks.length;
    }
    this.setState({
      course: course,
      progress: (completeTasks / numTasks) * 100
    });
  }

  render() {
    return (
      <Aux>
        <div className="container-fluid">
          <div className="row course-view">
            <CourseInfo
              course={this.state.course}
              uid={this.props.uid}
              progress={this.state.progress}
            />
            <AssignmentsContainer course={this.state.course} />
          </div>
        </div>
      </Aux>
    );
  }
}

export default CourseView;
