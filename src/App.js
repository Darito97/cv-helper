import React from "react";

import Forms from "./components/Forms";
import Header from "./components/Header";
import ShowCV from "./components/ShowCV";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderedComponent: "header",
      Info: {
        GeneralInfo: {
          name: "",
          email: "",
          number: "",
          job: "",
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
          mainTasks: "",
          jobTime: "",
        },
      },
    };
    this.ChangeRenderedComponent = this.ChangeRenderedComponent.bind(this);
    this.ChangeInfoState = this.ChangeInfoState.bind(this);
  }
  ChangeRenderedComponent(componentToRender) {
    this.setState({
      renderedComponent: componentToRender,
    });
  }
  ChangeInfoState(nameOfInfo, ObjectWithChanges) {
    if (nameOfInfo === "GeneralInfo") {
      this.setState({
        Info: {
          GeneralInfo: ObjectWithChanges,
          SchoolInfo: { ...this.state.Info.SchoolInfo },
          ExperienceInfo: { ...this.state.Info.ExperienceInfo },
        },
      });
    } else if (nameOfInfo === "SchoolInfo") {
      this.setState({
        Info: {
          GeneralInfo: { ...this.state.Info.GeneralInfo },
          SchoolInfo: ObjectWithChanges,
          ExperienceInfo: { ...this.state.Info.ExperienceInfo },
        },
      });
    } else {
      this.setState({
        Info: {
          SchoolInfo: { ...this.state.Info.SchoolInfo },
          GeneralInfo: { ...this.state.Info.GeneralInfo },
          ExperienceInfo: ObjectWithChanges,
        },
      });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.renderedComponent === "header" ? (
          <Header
            ChangeRenderedComponent={(nameOfComponent) =>
              this.ChangeRenderedComponent(nameOfComponent)
            }
          />
        ) : this.state.renderedComponent === "getInformation" ? (
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
          <ShowCV
            Info={this.state.Info}
            ChangeRenderedComponent={(nameOfComponent) =>
              this.ChangeRenderedComponent(nameOfComponent)
            }
          />
        )}
      </div>
    );
  }
}

export default App;
