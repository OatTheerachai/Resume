import React from "react";
import "../assets/css/tooltip.css";

const Tooltip = (props) => {
  return (
    <div className="icon__skill" key={props.key}>
      <i className={props.color}>{props.icon}</i>
      <span>{props.title}</span>
    </div>
  );
};

export default Tooltip;
