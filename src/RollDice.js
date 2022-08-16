import React, { Component } from "react";
import Die from "./Die";
// import "./Die.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // pick 2 new Number
    const newDie1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    const newDie2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    //Set state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    // Wait one second then set rolling to false

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="dice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
          {/* disable button if rolling is true */}
        </div>
        <div className="center">
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
