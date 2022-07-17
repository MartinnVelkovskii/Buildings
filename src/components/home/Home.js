import React from "react";
import { Footer } from "../footer/Footer";
import { Heading } from "../heading/Heading";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="costum-container">
        <Heading />
      </div>
      <Footer />
    </>
  );
};
