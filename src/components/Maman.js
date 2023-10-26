import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Enfant from "./Enfant";

class Maman extends Component {
  state = {
    messageMaman: null,
    messageEnfant: null,
  };

  ordreMaman = () => {
    this.setState({
      messageMaman: "Va ranger ta chambre !",
    });
  };

  reponseEnfant = () => {
    this.setState({
      messageEnfant: "D'accord, j'y vais -_-",
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-danger">Maman</h1>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.ordreMaman}
        >
          Ordre de la mère
        </button>
        <p className="mt-3 text-success">
          <strong>{this.state.messageMaman}</strong>
        </p>

        <hr />

        <Enfant
          name="Amine"
          reponseEnfant={this.reponseEnfant}
          leState={this.state}
        />
      </div>
    );
  }
}

export default Maman;
