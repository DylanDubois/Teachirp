import React from "react";
import Aux from "../../hoc/Aux";
import ProgressBarRound from "../../UI/ProgressBarRound/ProgressBarRound";

const courseInfo = props => {
  console.log(props.course);
  const course = props.course;
  return (
    <div className="col-md-3 col-sm-12 bg-dark pt-5 text-center pt-sm-0">
      {course && (
        <Aux>
          <h1 className="text-primary display-4 mt-5 header">
            {course.courseName}
          </h1>
          <ProgressBarRound progress={course.progress} />
          <button type="button" className="btn btn-outline-primary mt-5">
            Add Assignment
          </button>
        </Aux>
      )}
    </div>
  );
};

export default courseInfo;
