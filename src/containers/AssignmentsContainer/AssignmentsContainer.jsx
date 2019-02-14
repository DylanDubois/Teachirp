import React, { Component } from "react";
import Assignment from "../../components/AssignmentTile/AssignmentTile";
import "./AssignmentsContainer.scss";

class AssignmentsContainer extends Component {
  state = {
    assignments: []
  };

  componentDidMount() {
    console.log(this.props);
  }

  shouldComponentUpdate(next, newp) {
    if (next.assignments !== newp.assignments)
      this.setState({ assignments: next.assignments });
    return true;
  }

  render() {
    let assignments = <h5>No Assignments</h5>;
    if (this.props.course.assignments) {
      assignments = Object.keys(this.props.course.assignments).map(
        assignment => {
          return (
            <Assignment
              assignment={this.props.course.assignments[assignment]}
              key={this.props.course.assignments[assignment].id}
            />
          );
        }
      );
    }
    return (
      <div className="col-md-9 col-sm-12 p-0">
        <div className="container-fluid">
          <div className="row gradient mb-3">
            <h1 className="display-4 text-primary pt-5 pb-5 header">
              Assignments
            </h1>
          </div>
          <div className="row">{assignments}</div>
        </div>
      </div>
    );
  }
}

export default AssignmentsContainer;
