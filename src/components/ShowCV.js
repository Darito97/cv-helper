import "./ShowCV.css";
import React from "react";

class ShowCV extends React.Component {
  constructor(props) {
    super(props);
    this.refShowCV = React.createRef()
    this.ChangeInformation = this.ChangeInformation.bind(this);
    this.Print = this.Print.bind(this);
  }
  ChangeInformation(e) {
    this.refShowCV.current.classList.add("disappearToTheTop");
    setTimeout(() => {
      this.refShowCV.current.classList.remove("disappearToTheTop");
      this.props.ChangeRenderedComponent("getInformation");
    }, 500);
  }
  Print() {
    window.print();
  }

  render() {
    const { name, email, number, job } = this.props.Info.GeneralInfo;
    const { schoolName, carrerName, date, isStuding } =
      this.props.Info.SchoolInfo;
    const { companyName, jobName, mainTasks, jobTime } =
      this.props.Info.ExperienceInfo;
    return (
      <main className="App__show-cv" ref={this.refShowCV}>
        <section className="show-cv__info-section">
          <div className="info-section__info-principal">
            <div className="info-principal__image">Pegar foto</div>
            <h2 className="info-principal__title">
              Me llamo {name} y soy {job}.
            </h2>
          </div>
          <h2 className="info-section__title">Información académica</h2>
          <p className="info-section__text">
            Escuela: {schoolName} <br />
            Título: {carrerName} <br />
            {isStuding
              ? "Estudiando actualmente"
              : "Finalizada en " + date.split("").reverse().join("")}
          </p>
          <h2 className="info-section__title">Experiencia laboral</h2>
          <p className="info-section__text">
            Mi anterior trabajo fue en {companyName}, trabajé durante {jobTime}{" "}
            como {jobName}. <br />
            Las principales tareas que realicé fueron: {mainTasks.toLowerCase()}
            .
          </p>
          <h2 className="info-section__title">Informacion de contacto</h2>
          <p className="info-section__text">
            Puedes contactarme mandando un email a {email} o llamando a el{" "}
            {number}.
          </p>
        </section>
        <section className="show-cv__buttons">
          <button
            className="show-cv__button"
            onClick={(e) => this.ChangeInformation(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#121212"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
            </svg>
            Editar información
          </button>
          <button className="show-cv__button" onClick={this.Print}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#121212"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
              <circle cx="18" cy="11.5" r="1" />
            </svg>
            Imprimir
          </button>
        </section>
      </main>
    );
  }
}

export default ShowCV;
