import React from "react";
import "./Habilities.css";

const Habilities = ({ habilities }) => {
  return (
    <div>
      <div className="habilities card">
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"></p>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Habilities;