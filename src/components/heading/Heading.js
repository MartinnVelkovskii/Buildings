import React from "react";
import "./Heading.css";
import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <div className="text-center">
      <Link className="underline link-dark" to="/list">
        <h4>Buildings</h4>
      </Link>
      <img className="w-100" src={"assets/Buildings1.jpg"} />
      <p>
        Buildings speak to us, and the essence of understanding architecture is
        learning how to pick up their messages. Having some sort of academic
        background in architecture helps, for it gives one a historical context
        in which to evaluate different “messages,” but it is not essential.
        Indeed, the wrong academic training can hinder the process.There is
        nothing more depressing than the architecture — watcher who never
        forgets the difference between a pediment and a cornice, but
        consistently fails to get to the building's heart.
      </p>
    </div>
  );
};
