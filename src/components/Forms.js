import React from "react";

import GeneralForm from "./GeneralForm";
import SchoolForm from "./SchoolForm";
import ExperienceForm from "./ExperienceForm";

class Forms extends React.Component {
  render() {
    return (
      <div className="App__form">
        <GeneralForm />
        <SchoolForm />
        <ExperienceForm />
      </div>
    );
  }
}

export default Forms;
