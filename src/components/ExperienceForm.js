import React, { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.LastForm = this.LastForm.bind(this);
    this.ShowInformation = this.ShowInformation.bind(this)
  }
  LastForm(e) {
    e.preventDefault();
    this.props.formRendered("SchoolForm");
  }
  ShowInformation(e){
    e.preventDefault()
    this.props.ChangeRenderedComponent('showInformation')
  }
  render() {
    return (
      <form className="forms__form">
        <h2 className="form__title">Experiencia laboral</h2>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="companyName">
            Nombre de la compañia
          </label>
          <input name="companyName" type="text" placeholder="Ej: Google" />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="jobName">
            Titulo del puesto
          </label>
          <input
            name="jobName"
            type="text"
            placeholder="Ej: Software engineer"
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
          />
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="tasks">
            Tareas principales del puesto
          </label>
          <textarea
            name="tasks"
            placeholder="Encargado de un equipo, diseño de arquitectura de productos..."
          ></textarea>
        </div>
        <div className="form__input-group">
          <label className="input-group__label" htmlFor="jobTime">
            ¿Cuanto tiempo trabajaste ahi? (en meses)
          </label>
          <input type="text" name="jobTitme" placeholder="8 meses" />
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
