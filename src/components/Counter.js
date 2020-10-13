import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrementClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrementClick = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleResetClick = () => {
    this.setState({count: 0})
  }

  render() {
    return (
      <div className="counter">
        <span
          className="counterValue"
          style={{
            color:
              this.state.count === 0
                ? "black"
                : this.state.count < 0
                ? "red"
                : "green",
          }}
        >
          {this.state.count}
        </span>
        <button
          style={{ background: "green", color: "white" }}
          onClick={this.handleIncrementClick}
        >
          Increment
        </button>
        <button
          style={{ background: "red", color: "white" }}
          onClick={this.handleDecrementClick}
        >
          Decrement
        </button>
        <button
          style={{ background: "black", color: "white" }}
          onClick={this.handleResetClick}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
