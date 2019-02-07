import React from "react";
import "./CourseTile.scss";

const courseTile = props => {
  const { progress } = props;

  return (
    <div className="col-md-4 col-sm-12 mb-4" onClick={props.courseSelected}>
      <div className="card bg-dark col-12 course">
        <div className="card-header text-primary border-bottom border-white">
          <h5>{props.courseName}</h5>
        </div>
        <div className="card-body">
          <h5 className="card-title text-white">
            {props.assignmentCount} Assignments
          </h5>
          <div className="progress">
            <div
              className="progress-bar-animated progress-bar-striped bg-primary"
              role="progressbar"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseTile;
