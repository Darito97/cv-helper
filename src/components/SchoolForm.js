import React, { Component } from "react";

export default class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.Info };
    this.NextForm = this.NextForm.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  NextForm(e) {
    e.preventDefault();
    this.props.formRendered("ExperienceForm");
    this.props.ChangeInfoState('SchoolInfo', {...this.state})
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
      newState = {
        isStuding: value,
      };
    }
    this.setState({
      ...newState,
    });
  }
  render() {
    return (
      <form className="forms__form">
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
            onChange={(e) => this.ChangeValueOfState(e.target.checked, "isStuding")}
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
