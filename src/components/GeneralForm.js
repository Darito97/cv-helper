import React, { Component } from "react";

export default class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.Info };
    this.NextForm = this.NextForm.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  NextForm(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.formRendered("SchoolForm");
  }
  ChangeValueOfState(value, fieldToChange) {
    let newState = {};
    if (fieldToChange === "name") {
      newState = {
        name: value,
      };
    } else if (fieldToChange === "email") {
      newState = {
        email: value,
      };
    } else if (fieldToChange === "number") {
      newState = {
        number: value,
      };
    }
    this.setState({
      ...newState,
    }, ()=> console.log(this.state, newState));
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
            value={this.state.name}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "name")}
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
            value={this.state.email}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "email")}
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
            value={this.state.number}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "number")}
          />
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
