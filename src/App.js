import "./App.css";
import React from "react";

import Forms from "./components/Forms";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderedComponent: "getInformation",
      Info: {
        GeneralInfo: {
          name: "",
          email: "",
          number: "",
        },
        SchoolInfo: {
          schoolName: "",
          carrerName: "",
          date: "",
          isStuding: false,
        },
        ExperienceInfo: {
          companyName: "",
          jobName: "",
          jobTime: "",
        },
      },
    };
    this.ChangeRenderedComponent = this.ChangeRenderedComponent.bind(this);
    this.ChangeInfoState = this.ChangeInfoState.bind(this);
  }
  ChangeRenderedComponent(componentToRender) {
    this.setState({
      ...this.state,
      renderedComponent: componentToRender,
    });
    console.log(this.state);
  }
  ChangeInfoState(nameOfInfo, ObjectWithChanges) {
    if (nameOfInfo === "GeneralInfo") {
      this.setState({
        ...this.state,
        Info: {
          ...this.state.Info.SchoolInfo,
          ...this.state.Info.ExperienceInfo,
          GeneralInfo: ObjectWithChanges,
        },
      });
    } else if (nameOfInfo === "SchoolInfo") {
      this.setState({
        ...this.state,
        Info: {
          ...this.state.Info.GeneralInfo,
          ...this.state.Info.ExperienceInfo,
          SchoolInfo: ObjectWithChanges,
        },
      });
    } else {
      this.setState({
        ...this.state,
        Info: {
          ...this.state.Info.GeneralInfo,
          ...this.state.Info.SchoolInfo,
          ExperienceInfo: ObjectWithChanges,
        },
      });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.renderedComponent === "getInformation" ? (
          <Forms
            ChangeRenderedComponent={(nameOfComponent) =>
              this.ChangeRenderedComponent(nameOfComponent)
            }
            Info={this.state.Info}
            ChangeInfoState={(nameOfInfo, ObjectWithChanges) =>
              this.ChangeInfoState(nameOfInfo, ObjectWithChanges)
            }
          />
        ) : (
          "Mostrar info"
        )}
      </div>
    );
  }
}

export default App;
