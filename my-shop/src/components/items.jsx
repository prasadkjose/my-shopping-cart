import React, { Component } from "react";
import Item from "./item";
import "../styles/counters.css";
class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container text-center">
        <div className="ar-btns ">
          <button onClick={this.props.onReset} className="btn btns">
            {" "}
            Reset{" "}
          </button>
          <button onClick={this.props.onAdd} className="btn btns m-2">
            Add
          </button>{" "}
        </div>

        <div className="container ">
          <div className="row">
            <div className="center">
              <div className="d-flex flex-wrap">
                {this.props.items.map((item) => (
                  <Item
                    key={item.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    onTextChange={this.props.onTextChange}
                    onCheck={this.props.onCheck}
                    /*You can send in state objects as attributes and it is accessed as params inside the conpoment */
                    item={item}
                  ></Item>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
