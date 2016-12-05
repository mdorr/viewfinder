import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div className="helloWorld">
      <img src="./assets/viewfinder-logo.png" alt="Viewfinder logo"/>
      <h1>viewfinder</h1>
    </div>,
    root
  );
});
