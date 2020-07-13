import React from "react";

export default FuncComponent = (props) => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];
  return (
    <div>
      {arr.map((ele, index) => {
        return <h1>{ele}</h1>;
      })}
      <span
        style={{
          position: "fixed",
          right: 100,
          bottom: 50,
          fontSize: 30,
          backgroundColor: "pink",
          color: "green",
        }}
      >
        {props.text}
      </span>
    </div>
  );
};
