import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.NextPage = this.NextPage.bind(this)
  }
  NextPage(e){
    e.preventDefault()
    this.props.ChangeRenderedComponent("getInformation")
  }

  render() {
    return (
      <header className="App_header">
        <p className="header__text-introduction">Bienvenido a</p>
        <h1>CV-Helper</h1>
        <p className="header__text-introduction">
          Te ayudaremos a recopilar tu informacion para que conozcas que debe
          llevar tu Curriculum Vitae.
        </p>
        <button className="header__button" onClick={e=> this.NextPage(e)}>
          ¡Ya quiero comenzar!
        </button>
      </header>
    );
  }
}

export default Header;
