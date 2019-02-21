import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import axios from "../../config/axios";
import fire from "../../config/Fire";

class AddCourse extends Component {
  state = {
    name: "",
    tmpTaskName: ""
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  submitCourse = () => {
    const id = new Date().getTime() - 1550000000000;
    const course = { name: this.state.name, id: id };
    this.setState({
      name: ""
    });
    const dbref = fire
      .database()
      .ref("/users/" + this.props.uid + "/courses/" + id);
    dbref.update(course);
  };

  render() {
    return (
      <Aux>
        <button
          type="button"
          className="btn btn-outline-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Course
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
                  Add Course
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() =>
                    this.setState({
                      name: "",
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
                      placeholder="Course name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-outline-primary header"
                  data-dismiss="modal"
                  onClick={this.submitCourse}
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

export default AddCourse;
