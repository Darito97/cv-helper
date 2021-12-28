import React, { Component } from "react";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.Info}
    this.LastForm = this.LastForm.bind(this);
    this.ShowInformation = this.ShowInformation.bind(this);
    this.ChangeValueOfState = this.ChangeValueOfState.bind(this)
  }
  LastForm(e) {
    e.preventDefault();
    this.props.formRendered("SchoolForm");
  }
  ShowInformation(e) {
    e.preventDefault();
    this.props.ChangeRenderedComponent("showInformation");
    this.props.ChangeInfoState('ExperienceInfo', {...this.state})
  }
  ChangeValueOfState(value, fieldToChange){
    let newState = {}
    if(fieldToChange === "companyName"){
      newState = {
        companyName: value
      }
    }
    else if(fieldToChange === "jobName"){
      newState = {
        jobName: value
      }
    }
    else if(fieldToChange === "jobTime"){
      newState = {
        jobTime: value
      }
    }
    this.setState({
      ...newState
    }, ()=>console.log(this.state))

  }
  render() {
    return (
      <form className="forms__form">
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
            onChange={e=> this.ChangeValueOfState(e.target.value, "companyName")}
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
            onChange={e=> this.ChangeValueOfState(e.target.value, "jobName")}
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
            onChange={e=> this.ChangeValueOfState(e.target.value, "jobTime")}
          />
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
