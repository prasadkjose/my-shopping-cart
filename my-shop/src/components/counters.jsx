import React, { Component } from "react";
import Counter from "./counter";
import "../styles/counters.css";
class Counters extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary">
          {" "}
          Reset{" "}
        </button>
        <button onClick={this.props.onAdd} className="btn btn-primary m-2">
          Add
        </button>{" "}
        <div className="container center ">
          <div className="row">
            <div className=" ">
              <div className="d-flex  flex-wrap">
                {this.props.counters.map((counter) => (
                  <Counter
                    key={counter.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    /*You can send in state objects as attributes and it is accessed as params inside the conpoment */
                    counter={counter}
                  ></Counter>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
