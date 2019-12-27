import React, { Component } from "react";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <form id="article-form">
        <input type="text" placeholder="Digite aqui..." />
        <input type="text" placeholder="Digite aqui..." />
      </form>
    );
  }
}
export default FormContainer;