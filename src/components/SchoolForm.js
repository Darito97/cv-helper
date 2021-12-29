import React, { Component } from "react";

export default class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.Info };
    this.previousForm = this.previousForm.bind(this);
    this.NextForm = this.NextForm.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  previousForm(e) {
    e.preventDefault();
    this.props.formRendered("GeneralForm");
  }
  NextForm(e) {
    e.preventDefault();
    let objectWithChanges = { ...this.state };
    this.props.ChangeInfoState("SchoolInfo", objectWithChanges);
    this.props.formRendered("ExperienceForm");
  }
  ChangeValueOfState(value, fieldToChange) {
    let newState = {};
    if (fieldToChange === "schoolName") {
      newState = {
        schoolName: value,
      };
    } else if (fieldToChange === "carrerName") {
      newState = {
        carrerName: value,
      };
    } else if (fieldToChange === "date") {
      newState = {
        date: value,
      };
    } else if (fieldToChange === "isStuding") {
      if (value === true) {
        newState = {
          date: "",
          isStuding: value,
        };
      } else {
        newState = {
          isStuding: value,
        };
      }
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
          onClick={(e) => this.previousForm(e)}
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
        <h2 className="form__title">Experiencia educativa</h2>
        <div className="form__input-group">
          <label htmlFor="schoolName" className="input-group__label">
            Ingresa el nombre de la escuela:
          </label>
          <input
            className="input-group__input"
            type="text"
            name="schoolName"
            placeholder="Ej: UMSNH"
            value={this.state.schoolName}
            onChange={(e) =>
              this.ChangeValueOfState(e.target.value, "schoolName")
            }
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="carrerName" className="input-group__label">
            Ingresa el titulo de tu carrera:
          </label>
          <input
            className="input-group__input"
            type="text"
            name="carrerName"
            placeholder="Ej: Tecnico en computacion"
            value={this.state.carrerName}
            onChange={(e) =>
              this.ChangeValueOfState(e.target.value, "carrerName")
            }
            defaultChecked={this.state.isStuding}
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="date" className="input-group__label">
            Ingresa la fecha de finalizacion de tu estudio:
          </label>
          <input
            className="input-group__input"
            type="date"
            name="date"
            value={this.state.date}
            disabled={this.state.isStuding}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "date")}
          />
          <input
            type="checkbox"
            name="stillStuding"
            value={this.state.isStuding}
            onChange={(e) =>
              this.ChangeValueOfState(e.target.checked, "isStuding")
            }
          />
          <label htmlFor="stillStuding">Todavia estoy estudiando</label>
        </div>
        <button
          type="submit"
          className="form__button-submit"
          onClick={(e) => this.NextForm(e)}
        >
          Agregar informacion
        </button>
      </form>
    );
  }
}
