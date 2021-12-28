import React from "react";

import GeneralForm from "./GeneralForm";
import SchoolForm from "./SchoolForm";

class Forms extends React.Component {
  render() {
    return (
      <div className="App__form">
        <GeneralForm />
        <SchoolForm />
      </div>
    );
  }
}

export default Forms;
