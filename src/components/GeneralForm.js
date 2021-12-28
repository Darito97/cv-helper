import React, { Component } from "react";

export default class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.NextForm = this.NextForm.bind(this)
  }
  NextForm(e){
    e.preventDefault()
    this.props.formRendered('SchoolForm')
  }
  render() {
    return (
      <form className="forms__form">
        <h2 className="form__title">Informacion general</h2>
        <div className="form__input-group">
          <label htmlFor="name" className="input-group__label">
            Ingresa tu nombre completo:
          </label>
          <input
            className="input-group__input"
            type="text"
            name="name"
            placeholder="Ej: David Alonso"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="email" className="input-group__label">
            Ingresa tu correo electronico:
          </label>
          <input
            className="input-group__input"
            type="email"
            name="email"
            placeholder="Ej: tucorreo@algo.com"
          />
        </div>
        <div className="form__input-group">
          <label htmlFor="phoneNumber" className="input-group__label">
            Ingresa tu numero de telefono:
          </label>
          <input
            className="input-group__input"
            name="phoneNumber"
            type="number"
            placeholder="1234567890"
          />
        </div>
        <button
          type="submit"
          className="form__button-submit"
          onClick={e => this.NextForm(e)}
        >
          Agregar informacion
        </button>
      </form>
    );
  }
}
