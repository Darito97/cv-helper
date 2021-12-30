import React, { Component } from "react";

export default class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.Info };
    this.BackToHeader = this.BackToHeader.bind(this);
    this.NextForm = this.NextForm.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this);
  }
  BackToHeader(e) {
    e.preventDefault();
    e.nativeEvent.path[2].classList.add("disappearToTheTop");
    setTimeout(() => {
      e.nativeEvent.path[2].classList.remove("disappearToTheTop");
      this.props.ChangeRenderedComponent("header");
    }, 500);
  }
  NextForm(e) {
    e.preventDefault();
    e.nativeEvent.path[1].classList.add("disappearToTheTop");
    setTimeout(() => {
      e.nativeEvent.path[1].classList.remove("disappearToTheTop");
      let objectWithChanges = { ...this.state };
      this.props.ChangeInfoState("GeneralInfo", objectWithChanges);
      this.props.formRendered("SchoolForm");
    }, 500);
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
    } else if (fieldToChange === "job") {
      newState = {
        job: value,
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
          onClick={(e) => this.BackToHeader(e)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#121212"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
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
        <div className="form__input-group">
          <label htmlFor="job" className="input-group__label">
            ¿Que profesional eres?
          </label>
          <input
            className="input-group__input"
            name="job"
            type="text"
            placeholder="Desarrollador web"
            value={this.state.job}
            onChange={(e) => this.ChangeValueOfState(e.target.value, "job")}
          />
        </div>
        <button
          type="submit"
          className="form__button-submit"
          onClick={(e) => this.NextForm(e)}
        >
          Agregar informacion
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
