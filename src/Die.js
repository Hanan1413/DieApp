import React, { Component } from "react";
import "./App.css";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div>
        <div className="Die">
          <i
            className={`fa fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ""}`}></i>
        </div>
       
      </div>
    );
  }
}

export default Die;
