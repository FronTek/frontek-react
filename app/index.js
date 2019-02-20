import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// state
// lifecycle event
// UI

class App extends Component {
  // state = {};

  // how the UI looks
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <p>lorem </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
