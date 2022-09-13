import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "County Climate Watch")
  );
};

render(React.createElement(App), document.getElementById("root"));