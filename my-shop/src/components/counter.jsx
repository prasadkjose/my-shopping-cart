import React, { Component } from "react";
import "../styles/counter.css";
import check from "../resources/icons/tick.png";
import DataService from "../services/services";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    //Individual Component tag style without classes
    this.style = {
      fontSize: 20,
    };

    //this.incrementCount = this.incrementCount.bind(this);
  }

  //Methods
  //Example of arrow function(no binding needed)
  // incrementCount = () => {
  //   console.log("Button clicked");
  //   this.setState({ count: this.state.count + 1 });
  // };

  handleCheck(counter) {
    var displayDefault = "initial";
    return displayDefault;
  }

  getBadgeClases() {
    let classes = "badge m1 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value, this.props.counter);
  }
  //Final Render
  render() {
    return (
      <div className="">
        <img
          style={{ display: this.handleCheck(this.props.counter) }}
          src={check}
          className="check"
          alt="Logo"
        />
        <div className="card row ">
          <div className="card-body">
            <div className="col-xs-1 in-block">
              <span style={this.style} className={this.getBadgeClases()}>
                {this.props.counter.quantity}
              </span>{" "}
            </div>

            <div className="ml-2 col-xs-4  in-block">
              <form>
                {" "}
                <input
                  className="input"
                  type="text"
                  defaultValue={this.props.counter.item}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="col-xs-3 in-block ml-4">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm "
              >
                +
              </button>{" "}
            </div>
            <div className="col-xs-2 ml-3 in-block ">
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm "
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
