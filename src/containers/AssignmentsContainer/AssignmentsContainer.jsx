import React, { Component } from "react";
import Assignment from "../../components/AssignmentTile/AssignmentTile";
import "./AssignmentsContainer.scss";

class AssignmentsContainer extends Component {
  state = {
    assignments: [
      {
        name: "Homework 1",
        tasks: ["wow", "hey"],
        progress: 50,
        id: 1
      },
      {
        name: "Project 2",
        tasks: ["wow", "hey", "dude", "wow"],
        progress: 25,
        id: 2
      },
      {
        name: "Yeet 3",
        tasks: ["wow", "hey", "dude", "wow", "lit"],
        progress: 75,
        id: 3
      },
      {
        name: "Savage 4",
        tasks: ["dude", "wow", "lit"],
        progress: 75,
        id: 4
      }
    ]
  };
  render() {
    const assignments = this.state.assignments.map(assignment => {
      return <Assignment assignment={assignment} key={assignment.id} />;
    });
    return (
      <div className="col-md-9 col-sm-12 p-0">
        <div className="container-fluid">
          <div className="row bg-dark mb-3">
            <h1 className="display-4 text-primary pt-5 pb-5 header">
              Your Assignments
            </h1>
          </div>
          <div className="row">{assignments}</div>
        </div>
      </div>
    );
  }
}

export default AssignmentsContainer;
