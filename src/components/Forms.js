import React from "react";

import GeneralForm from "./GeneralForm";
import SchoolForm from "./SchoolForm";
import ExperienceForm from "./ExperienceForm";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formRendered: props.formRendered || "GeneralForm",
    };
    this.ChangeFormRendered = this.ChangeFormRendered.bind(this);
  }
  ChangeFormRendered(nameOfForm) {
    this.setState({
      formRendered: nameOfForm,
    });
  }
  render() {
    return (
      <div className="App__form">
        {this.state.formRendered === "GeneralForm" ? (
          <GeneralForm
            formRendered={this.ChangeFormRendered}
            Info={this.props.Info.GeneralInfo}
            ChangeInfoState = {this.props.ChangeInfoState}
          />
        ) : this.state.formRendered === "SchoolForm" ? (
          <SchoolForm
            formRendered={this.ChangeFormRendered}
            Info={this.props.Info.SchoolInfo}
            ChangeInfoState = {this.props.ChangeInfoState}
          />
        ) : (
          <ExperienceForm
            formRendered={this.ChangeFormRendered}
            ChangeRenderedComponent={this.props.ChangeRenderedComponent}
            Info={this.props.Info.ExperienceInfo}
            ChangeInfoState = {this.props.ChangeInfoState}
          />
        )}
      </div>
    );
  }
}

export default Forms;
