import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0
    ? "#fff"
    : "#000";

  const textColor = seconds % 2 !== 0
  ? "#fff"
  : "#000";

  const styles = {
    backgroundColor,
    color: textColor
  };

  const secondsElem = (
    <div 
      className="seconds"
      style={styles}
    >
      {seconds}
    </div> 
  );

  reactDom.render(secondsElem, rootElem);
}

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);