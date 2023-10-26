import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Enfant = (props) => {
  console.log(props);

  const btnReponseEnfant =
    props.leState.messageMaman !== null ? (
      <button
        onClick={props.reponseEnfant}
        type="button"
        className="btn btn-success"
      >
        Réponse
      </button>
    ) : (
      <button disabled="true" type="button" className="btn btn-success">
        Réponse
      </button>
    );

  return (
    <div>
      <h2 className="text-primary">{props.name}</h2>
      {btnReponseEnfant}
      <p className="mt-3 text-success">
        <strong>{props.leState.messageEnfant}</strong>
      </p>
    </div>
  );
};

export default Enfant;
