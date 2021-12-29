import React from "react";

class ShowCV extends React.Component {
  render() {
    const { name, email, number, job } = this.props.Info.GeneralInfo;
    const { schoolName, carrerName, date, isStuding } =
      this.props.Info.SchoolInfo;
    const { companyName, jobName, mainTasks, jobTime } =
      this.props.Info.ExperienceInfo;
    return (
      <main className="App__show-cv">
        <section className="show-cv__info-section">
          <h2 className="info-section__title --title-principal">
            Me llamo {name} y soy {job}.
          </h2>
          <h2 className="info-section__title">Informacion academica</h2>
          <p className="info-section__text">
            Escuela: {schoolName} <br />
            Titulo: {carrerName} <br />
            {isStuding
              ? "Estudiando actualmente"
              : "Finalizada en " + date.split("").reverse().join("")}
          </p>
          <h2 className="info-section__title">Experiencia laboral</h2>
          <p className="info-section__text">
            Mi anterior trabajo fue en {companyName}, trabaje durante {jobTime}{" "}
            como {jobName}. <br />
            Las principales tareas que realice fueron: {mainTasks.toLowerCase()}
            .
          </p>
          <h2>Informacion de contacto</h2>
          <p className="info-section__text">
            Puedes contactarme mandando un email a {email} o llamando a el{" "}
            {number}.
          </p>
        </section>
      </main>
    );
  }
}

export default ShowCV;
