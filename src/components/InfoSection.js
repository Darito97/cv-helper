import React from "react";

import ItemInfo from "./ItemInfo";

class InfoSection extends React.Component {
  render() {
    const keysOfObject = Object.keys(this.props.Info);
    const titles = this.props.titles;
    let cont = 0;
    let cleanFields = 0;
    return (
      <section className="show-info__section-info">
        <h2 className="section-info__title">{this.props.title}</h2>
        {keysOfObject.map((key) => {
          cont++;
          if (this.props.Info[key] !== "") {
            cleanFields++;
            return (
              <ItemInfo
                key={key + cont}
                title={titles[cont - 1]}
                value={this.props.Info[key]}
              />
            );
          }
          return "";
        })}
        {cleanFields ? '' : <h4 className="section-info__subtitle">No hay información</h4>}
      </section>
    );
  }
}

export default InfoSection;
