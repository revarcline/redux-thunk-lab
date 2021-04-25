import React from "react";

export default class CatList extends React.Component {
  renderCatPics = () => {
    return this.props.catPics.map(({ id, url }) => {
      return (
        <div key={id}>
          <img src={url} alt={id} />
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderCatPics()} </div>;
  }
}
