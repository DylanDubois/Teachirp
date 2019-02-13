import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import TaskList from "../TaskList/TaskList";

class AddAssignment extends Component {
  state = {
    name: "",
    estimatedTime: "",
    tasks: [],
    tmpTaskName: ""
  };

  handleNameChange = event => {
    console.log(event);
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
    console.log(tasks);
    tasks.push(task);
    this.setState({ tmpTaskName: "", tasks: tasks });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  submitAssignment = () => {
    this.setState({
      name: "",
      estimatedTime: "",
      tasks: [],
      tmpTaskName: ""
    });
    console.log(this.state);
  };

  render() {
    return (
      <Aux>
        <button
          type="button"
          className="btn btn-outline-primary mt-5"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Assignment
        </button>

        <div
          className="modal fade"
          id="exampleModal"
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
                  Add Assignment
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
                  <div className="form-group col-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="name"
                      placeholder="Assignment name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group col-12">
                    <input
                      type="number"
                      className="form-control"
                      id="effort"
                      placeholder="Estimated time to complete"
                      value={this.state.estimatedTime}
                      onChange={this.handleEstimationChange}
                    />
                  </div>
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
                <TaskList tasks={this.state.tasks} />
              </div>
              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary header"
                  data-dismiss="modal"
                  onClick={this.submitAssignment}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AddAssignment;
