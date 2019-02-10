import React, { Component } from "react";
import Aux from "../../hoc/Aux";

class AddAssignment extends Component {
  state = {
    name: "",
    estimatedTime: "",
    tasks: [],
    tmpTaskName: ""
  };

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
    const task = { name: this.state.tmpTaskName, complete: false };
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({ tmpTaskName: "", tasks: tasks });
    console.log(this.state);
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
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
                >
                  <span aria-hidden="true" className="text-white">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
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
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="effort"
                      placeholder="Estimated time to complete"
                      value={this.state.estimatedTime}
                      onChange={this.handleEstimationChange}
                    />
                  </div>
                  <div className="row ml-1 mr-1">
                    <div className="form-group col-10 m-0 pl-0">
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
              </div>
              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary header"
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
