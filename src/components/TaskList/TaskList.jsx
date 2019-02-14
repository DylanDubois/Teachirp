import React from "react";

const taskList = props => {
  if (!props.tasks) return null;
  const tasks = props.tasks.map(task => {
    return (
      <div key={task.id} className="col-12">
        <h5 className="text-white">{task.name}</h5>
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
