import React, { Component } from "react";

class AssignmentTile extends Component {
  state = {
    name: "Homework 1",
    tasks: [],
    progress: 0,
    id: 1
  };

  componentDidMount() {
    const assignment = this.props.assignment;
    let progress = 0;
    if (this.props.assignment.tasks) {
      progress =
        (this.props.assignment.tasks.filter(task => {
          return task.complete === true;
        }).length /
          this.props.assignment.tasks.length) *
        100;
    }
    this.setState({
      name: assignment.name,
      tasks: assignment.tasks,
      progress: progress,
      id: assignment.id
    });
  }

  componentWillReceiveProps(next) {
    if (next.assignment !== this.state) {
      const assignment = next.assignment;
      let progress = 0;
      if (next.assignment.tasks) {
        progress =
          (next.assignment.tasks.filter(task => {
            return task.complete === true;
          }).length /
            next.assignment.tasks.length) *
          100;
      }
      this.setState({
        name: assignment.name,
        tasks: assignment.tasks,
        progress: progress,
        id: assignment.id
      });
    }
  }
  render() {
    return (
      <div className="col-md-4 col-sm-12 mb-4">
        <div
          className="card bg-dark col-12 course"
          onClick={this.props.assignmentSelected}
        >
          <div className="card-header text-primary border-bottom border-white header">
            <h4>{this.state.name}</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title text-white">
              {this.state.tasks ? this.state.tasks.length : 0} Tasks
            </h5>
            <div className="progress">
              <div
                className="progress-bar-animated progress-bar-striped bg-primary"
                role="progressbar"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: this.state.progress + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignmentTile;
