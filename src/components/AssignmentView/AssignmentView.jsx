import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import TaskList from "../TaskList/TaskList";
import fire from "../../config/Fire";

class AssignmentTile extends Component {
  state = {
    name: "Assignment",
    tasks: [],
    tmpTaskName: ""
  };

  componentWillReceiveProps(next) {
    if (next.assignment !== this.state) this.setState({ ...next.assignment });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEstimationChange = event => {
    this.setState({ estimatedTime: event.target.value });
  };

  handleTasksChange = event => {
    this.setState({ tmpTaskName: event.target.value });
  };

  handleTaskAddition = () => {
    if (!this.state.tmpTaskName) return;
    const timeId = new Date().getTime() - 1550000000000;
    const task = { name: this.state.tmpTaskName, complete: false, id: timeId };
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tmpTaskName: "", tasks: tasks });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  updateTask = task => {
    const tasks = this.state.tasks;
    tasks[task].complete = !tasks[task].complete;
    this.setState({ tasks });
  };

  submitAssignment = () => {
    const assignment = { ...this.state };
    this.setState({
      name: "",
      estimatedTime: "",
      tasks: [],
      tmpTaskName: ""
    });
    const dbref = fire
      .database()
      .ref(
        "users/" +
          this.props.uid +
          "/courses/" +
          this.props.courseId +
          "/assignments/" +
          this.state.id
      );
    dbref.update(assignment);
    // axios
    //   .post("/courses/" + this.props.courseId + "/" + id + ".json", assignment)
    //   .then(res => console.log(res))
    //   .catch(res => console.log(res));
  };

  render() {
    return (
      <Aux>
        <div
          className="modal fade"
          id="assignmentModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h4
                  className="modal-title text-primary text-center header"
                  id="exampleModalLabel"
                >
                  {this.state.name}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() =>
                    this.setState({
                      name: "",
                      estimatedTime: "",
                      tasks: [],
                      tmpTaskName: ""
                    })
                  }
                >
                  <span aria-hidden="true" className="text-white">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="col-12 row pr-0">
                    <div className="form-group col-10 m-0">
                      <input
                        type="text"
                        className="form-control"
                        id="task"
                        placeholder="Add Task"
                        value={this.state.tmpTaskName}
                        onChange={this.handleTasksChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-primary col-2 btn-sm align-middle p-0"
                      onClick={this.handleTaskAddition}
                    >
                      <h4>+</h4>
                    </button>
                  </div>
                </form>
                <TaskList
                  tasks={this.state.tasks}
                  updateTask={this.updateTask}
                />
              </div>
              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary header"
                  data-dismiss="modal"
                  onClick={this.submitAssignment}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AssignmentTile;
