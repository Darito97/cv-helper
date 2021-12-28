import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    this.state = {
      renderedComponent: "getInformation",
    };
    this.ChangeRenderedComponent = this.ChangeRenderedComponent.bind(this);
  }
  render() {
    return (
      <div className="App">
        {renderedComponent === "getInformation" ? "" : ""}
      </div>
    );
  }
}

export default App;
