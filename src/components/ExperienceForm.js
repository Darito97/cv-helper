import React, { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.Info };
    this.PreviousForm = this.PreviousForm.bind(this);
    this.ShowInformation = this.ShowInformation.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  PreviousForm(e) {
    e.preventDefault();
    this.props.formRendered("SchoolForm");
  }
  ShowInformation(e) {
    e.preventDefault();
    let objectWithChanges = { ...this.state };
    this.props.ChangeInfoState("ExperienceInfo", objectWithChanges);
    this.props.ChangeRenderedComponent("showInformation");
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
      <form className="forms__form">
        <button
          className="form__button-back"
          onClick={(e) => this.PreviousForm(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <h2 className="form__title">Experiencia laboral</h2>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="companyName">
            Nombre de la compañia
          </label>
          <input
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
            name="jobName"
            type="text"
            placeholder="Ej: Software engineer"
            value={this.state.jobName}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "jobName")}
          />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="jobTime">
            ¿Cuanto tiempo trabajaste ahi? (en meses)
          </label>
          <input
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
          Agregar informacion
        </button>
      </form>
    );
  }
}
