import React, { Component } from "react";
import Assignment from "../../components/AssignmentTile/AssignmentTile";
import "./AssignmentsContainer.scss";
import AssignmentView from "../../components/AssignmentView/AssignmentView";
import $ from "jquery";

class AssignmentsContainer extends Component {
  state = {
    assignments: [],
    selectedAssignment: {
      name: "Assignment"
    }
  };

  componentDidMount() {
    if (this.props.course && this.props.course.assignments)
      this.setState({ assignments: this.props.course.assignments });
  }

  componentWillReceiveProps(next) {
    if (next.course.assignments !== this.state.assignments)
      this.setState({ assignments: next.course.assignments });
  }

  assignmentSelected = assignment => {
    this.setState({ selectedAssignment: assignment });
    $("#assignmentModal").modal("show");
  };

  render() {
    let assignments = <h5>No Assignments</h5>;
    if (this.state.assignments) {
      assignments = Object.keys(this.state.assignments).map(assignment => {
        return (
          <Assignment
            assignment={this.state.assignments[assignment]}
            key={this.state.assignments[assignment].id}
            assignmentSelected={() =>
              this.assignmentSelected(this.state.assignments[assignment])
            }
          />
        );
      });
    }
    return (
      <div className="col-md-9 col-sm-12 p-0">
        <div className="container-fluid">
          <div className="row bg-dark gradient mb-3">
            <h1 className="display-4 text-primary pt-5 pb-5 header">
              Assignments
            </h1>
          </div>
          <div className="row">{assignments}</div>
        </div>
        <AssignmentView
          assignment={this.state.selectedAssignment}
          uid={this.props.uid}
          courseId={this.props.course.id}
        />
      </div>
    );
  }
}

export default AssignmentsContainer;
