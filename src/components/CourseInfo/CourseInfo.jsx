import React from "react";
import Aux from "../../hoc/Aux";
import ProgressBarRound from "../../UI/ProgressBarRound/ProgressBarRound";
import AddModal from "../AddAssignment/AddAssignment";

const courseInfo = props => {
  const course = props.course;
  return (
    <div className="col-md-3 col-sm-12 bg-dark pt-5 text-center pt-sm-0">
      {course && (
        <Aux>
          <h1 className="text-primary display-4 mt-5 header">{course.name}</h1>
          <ProgressBarRound progress={props.progress} />
          <AddModal courseId={course.id} uid={props.uid} />
        </Aux>
      )}
    </div>
  );
};

export default courseInfo;
