import React, { Component } from "react";

export default class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.NextForm = this.NextForm.bind(this);
  }
  NextForm(e) {
    e.preventDefault();
    this.props.formRendered("ExperienceForm");
  }
  render() {
    const { schoolName, carrerName, date, isStuding } = this.props.Info || "";
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
            defaultValue={schoolName}
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
            defaultValue={carrerName}
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="date" className="input-group__label">
            Ingresa la fecha de finalizacion de tu estudio:
          </label>
          <input className="input-group__input" type="date" name="date" defaultValue={date} />
          <input type="checkbox" name="stillStuding" defaultChecked={isStuding}/>
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
