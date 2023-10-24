import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Maman extends Component {
  state = {
    messageMaman: null,
    messageEnfant: null,
  };

  render() {
    return (
      <div>
        <h1>Maman</h1>

        <hr />
      </div>
    );
  }
}

export default Maman;
