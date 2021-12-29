import React from "react";

import InfoSection from "./InfoSection";

class ShowInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { GeneralInfo, SchoolInfo, ExperienceInfo } = this.props.Info;
    const GeneralTitles = ["Nombre", "Email", "Numero"];
    const SchoolTitles = [
      "Nombre de escuela",
      "Nombre de carrera",
      "Fecha de finalizacion",
      "Estudiando actualmente",
    ];
    const ExperienceTitles = [
      "Nombre de la compañia",
      "Nombre del trabajo",
      "Tiempo que estuvo trabajando",
    ];
    return (
      <>
        <InfoSection
          title="Informacion general"
          Info={GeneralInfo}
          titles={GeneralTitles}
        />
        <InfoSection
          title="Informacion educativa"
          Info={SchoolInfo}
          titles={SchoolTitles}
        />
        <InfoSection
          title="Experiencia"
          Info={ExperienceInfo}
          titles={ExperienceTitles}
        />
      </>
    );
  }
}

export default ShowInfo;
