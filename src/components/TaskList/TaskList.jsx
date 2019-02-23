import React from "react";
import "./TaskList.scss";

const taskList = props => {
  if (!props.tasks) return null;
  const tasks = props.tasks.map((task, index) => {
    const checkColor = task.complete ? "check blue-check" : "check";
    return (
      <div key={task.id} className="col-12 mb-2">
        <div className="row">
          <div
            className="col-1 check-box"
            onClick={() => {
              props.updateTask(index);
            }}
          >
            <div className={checkColor} />
          </div>
          <h5 className="text-white col-11">{task.name}</h5>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-3 p-0">
      <div className="row text-left">{tasks}</div>
    </div>
  );
};

export default taskList;
