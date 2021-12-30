import React, { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.refExperienceForm = React.createRef();
    this.state = { ...this.props.Info };
    this.PreviousForm = this.PreviousForm.bind(this);
    this.ShowInformation = this.ShowInformation.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  PreviousForm(e) {
    e.preventDefault();
    this.refExperienceForm.current.classList.add("disappearToTheTop");
    setTimeout(() => {
      this.refForm.current.classList.remove("disappearToTheTop");
      this.props.formRendered("SchoolForm");
    }, 500);
  }
  ShowInformation(e) {
    e.preventDefault();
    this.refExperienceForm.current.classList.add("disappearToTheTop");
    setTimeout(() => {
      this.refExperienceForm.current.classList.remove("disappearToTheTop");
      let objectWithChanges = { ...this.state };
      this.props.ChangeInfoState("ExperienceInfo", objectWithChanges);
      this.props.ChangeRenderedComponent("showInformation");
    }, 500);
  }
  ChangeValueOfState(value, fieldToChange) {
    let newState = {};
    if (fieldToChange === "companyName") {
      newState = {
        companyName: value,
      };
    } else if (fieldToChange === "jobName") {
      newState = {
        jobName: value,
      };
    } else if (fieldToChange === "jobTime") {
      newState = {
        jobTime: value,
      };
    } else if (fieldToChange === "mainTasks") {
      newState = {
        mainTasks: value,
      };
    }
    this.setState({
      ...newState,
    });
  }
  render() {
    return (
      <form className="forms__form" ref={this.refExperienceForm}>
        <button
          className="form__button-back"
          onClick={(e) => this.PreviousForm(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#121212"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <h2 className="form__title">Experiencia laboral</h2>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="companyName">
            Nombre de la compañía
          </label>
          <input
            className="input-group__input"
            name="companyName"
            type="text"
            placeholder="Ej: Google"
            value={this.state.companyName}
            onChange={(e) =>
              this.ChangeValueOfState(e.target.value, "companyName")
            }
          />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="jobName">
            Titulo del puesto
          </label>
          <input
            className="input-group__input"
            name="jobName"
            type="text"
            placeholder="Ej: Software engineer"
            value={this.state.jobName}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "jobName")}
          />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="jobTime">
            ¿Cuanto tiempo trabajaste ahí? (en meses)
          </label>
          <input
            className="input-group__input"
            type="text"
            name="jobTime"
            placeholder="8 meses"
            value={this.state.jobTime}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "jobTime")}
          />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="mainTasks">
            Tareas principales del puesto
          </label>
          <textarea
            className="input-group__input"
            cols="20"
            rows="10"
            name="mainTasks"
            placeholder="Liderar un equipo, manejo de inventario, SCRUM..."
            value={this.state.mainTasks}
            onChange={(e) =>
              this.ChangeValueOfState(e.target.value, "mainTasks")
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="form__button-submit"
          onClick={(e) => this.ShowInformation(e)}
        >
          Agregar información
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#121212"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </button>
      </form>
    );
  }
}
