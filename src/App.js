import "./App.css";
import React from "react";

import Forms from "./components/Forms";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderedComponent: "getInformation",
    };
    this.ChangeRenderedComponent = this.ChangeRenderedComponent.bind(this);
  }
  ChangeRenderedComponent(componentToRender) {
    this.setState({
      renderedComponent: componentToRender
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.renderedComponent === "getInformation" ? (
          <Forms ChangeRenderedComponent={(nameOfComponent) => this.ChangeRenderedComponent(nameOfComponent)} />
        ) : (
          "Mostrar info"
        )}
      </div>
    );
  }
}

export default App;
