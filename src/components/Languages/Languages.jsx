import React from "react";
import "./Languages.css";

const Languages = ({languages}) => {
  return (
    <div>
      <div>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name"></p>
              <p>{item.languages}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Languages;