import React from "react";
import "./ProgressBarRound.scss";

const progressRound = props => {
  const rightProg = props.progress >= 50 ? 180 : (props.progress / 50) * 180;
  const leftProg = props.progress < 50 ? 0 : ((props.progress - 50) / 50) * 180;
  return (
    <div className="progress-cust blue mt-5">
      <span className="progress-cust-left">
        <span
          className="progress-cust-bar"
          style={{ transform: "rotate(" + leftProg + "deg)" }}
        />
      </span>
      <span className="progress-cust-right">
        <span
          className="progress-cust-bar"
          style={{ transform: "rotate(" + rightProg + "deg)" }}
        />
      </span>
      <div className="progress-cust-value">
        {props.progress ? props.progress : 0}%
      </div>
    </div>
  );
};

export default progressRound;
