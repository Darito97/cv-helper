import React, { Component } from "react";

export default class SchoolForm extends Component {
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
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="date" className="input-group__label">
            Ingresa la fecha de finalizacion de tu estudio:
          </label>
          <input className="input-group__input" type="date" name="date" />
          <input type="checkbox" name="stillStuding" />
          <label htmlFor="stillStuding">Todavia estoy estudiando</label>
        </div>
      </form>
    );
  }
}
