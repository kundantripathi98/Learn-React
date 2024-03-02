import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
);

console.log(heading);

const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>;

let root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(jsxHeading);


