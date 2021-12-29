import React from "react";

class ItemInfo extends React.Component {
  render() {
    const { title, value } = this.props;
    return (
      <>
        <p className="section-info__item">
          {typeof value === "string" ? title + ": " + value : ""}
          {typeof value === "boolean"
            ? value
              ? "" + title
              : "No " + title.toLowerCase()
            : ""}
        </p>
      </>
    );
  }
}

export default ItemInfo;
