import React, { Component } from "react";
import Button from "./button";
import "./not-found.css";

const handleClick = () => {};

function NotFound() {
  return (
    <div className="body">
      <div className="subheader">Error 404: Page Not Found!</div>
      <img
        className="main-content-image-sq"
        src="./assets/vite.svg"
        alt="./assets/vite.svg"
      />
      <h1 className="main-content-text">
        The page "{window.location.href}" does not exist! Please return to a
        valid webpage.
      </h1>

      <Button
        _routing=""
        _buttonSize="btn-large"
        _usePalette={true}
        _palette={["#E6D20A", "#000000", "#000000", "#FFDC00"]}
      >
        Home Page
      </Button>
    </div>
  );
}

export default NotFound;
