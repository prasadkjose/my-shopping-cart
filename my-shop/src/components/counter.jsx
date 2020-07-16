import React, { Component } from "react";
import "../styles/counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.counter.value,
      imageURL: "https://picsum.photos/200",
      tags: ["tag1", "tag2", "tag3"],
    };
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

  getBadgeClases() {
    let classes = "badge m1 badge-";
    classes += this.props.counter === 0 ? "warning" : "primary";
    return classes;
  }

  //Final Render
  render() {
    return (
      <div className="">
        <div className="card row">
          {/*<img src={this.state.imageURL}></img>*/}
          <div className="card-body">
            <div className="col-md-1 buttons">
              <span style={this.style} className={this.getBadgeClases()}>
                {this.props.counter.value}
              </span>{" "}
            </div>

            <div className="input-group input-group-sm  col-md-5 buttons">
              <input type="text" />
            </div>
            <div className="col-md-2  m-2 buttons">
              <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm "
              >
                Increment
              </button>{" "}
            </div>
            <div className="col-md-2  m-2 buttons">
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
