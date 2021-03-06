import "./Header.css";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.refHeader = React.createRef();
    this.NextPage = this.NextPage.bind(this);
  }
  NextPage(e) {
    e.preventDefault();
    this.refHeader.current.classList.add("disappearToTheTop");
    setTimeout(() => {
      this.refHeader.current.classList.remove("disappearToTheTop");
      this.props.ChangeRenderedComponent("getInformation");
    }, 500);
  }

  render() {
    return (
      <header className="App_header" ref={this.refHeader}>
        <p className="header__text-introduction">Bienvenido a</p>
        <h1 className="header__title">CV-Helper</h1>
        <p className="header__text-introduction">
          Te ayudaremos a recopilar tú información para que conozcas que debe
          llevar tu Curriculum Vitae.
        </p>
        <button className="header__button" onClick={(e) => this.NextPage(e)}>
          ¡Ya quiero comenzar!
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
      </header>
    );
  }
}

export default Header;
