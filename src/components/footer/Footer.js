import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3 custom-color">
      <Link className="custom-link underline" to="/list">
        Buildings
      </Link>
      <Link className="custom-link underline" to="/">
        Home
      </Link>
      </div>
    </footer>
  );
};
