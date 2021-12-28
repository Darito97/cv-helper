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
          <GeneralForm formRendered={this.ChangeFormRendered} />
        ) : this.state.formRendered === "SchoolForm" ? (
          <SchoolForm formRendered={this.ChangeFormRendered} />
        ) : (
          <ExperienceForm formRendered={this.ChangeFormRendered} ChangeRenderedComponent={this.props.ChangeRenderedComponent}/>
        )}
      </div>
    );
  }
}

export default Forms;
