import React, { useEffect } from "react";
import "../assets/css/loading.css";

const Loading = () => {
  const Resume = ["R", "E", "S", "U", "M", "E"];
  const Name = ["T", "H", "E", "E", "R", "A", "C", "H", "A", "I"];
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center main-loading">
      <ul className="loading mb-4">
        {Resume.map((data, index) => (
          <li key={index} className="fadeIn" id={"item-" + index}>
            <span id={"item-" + index} />
            <div>{data}</div>
          </li>
        ))}
      </ul>
      <ul className="loading mt-4">
        {Name.map((data, index) => (
          <li key={index} className="fadeIn" id={"item-" + index}>
            <span id={"item-" + index} />
            <div>{data}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;
