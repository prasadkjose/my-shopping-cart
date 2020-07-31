import React, { Component } from "react";
import "../styles/counter.css";
import check from "../resources/icons/tick.png";
import DataService from "../services/services";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.getBadgeClases = this.getBadgeClases.bind(this);
    //Individual Component tag style without classes
    this.style = {
      fontSize: 20,
    };
  }
  /**
   * Handle check done
   * @param {item} item
   */
  handleCheck(item) {
    var displayDefault = "initial";
    return displayDefault;
  }
  /**
   *
   */
  getBadgeClases(quantity) {
    let classes = "badge m1 badge-";
    classes += quantity === 0 ? "warning" : "primary";
    return classes;
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value, this.props.item);
  }
  //Final Render
  render() {
    return (
      <div className="">
        <img
          style={{ display: this.handleCheck(this.props.item) }}
          src={check}
          className="check"
          alt="Logo"
        />
        <div className="card row ">
          <div className="card-body">
            <div className="col-xs-1 in-block">
              <span
                style={this.style}
                className={this.getBadgeClases(this.props.item.quantity)}
              >
                {this.props.item.quantity}
              </span>{" "}
            </div>

            <div className="ml-2 col-xs-4  in-block">
              <form>
                {" "}
                <input
                  className="input"
                  type="text"
                  defaultValue={this.props.item.item}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="col-xs-3 in-block ml-4">
              <button
                onClick={() => this.props.onIncrement(this.props.item)}
                className="btn btn-secondary btn-sm "
              >
                +
              </button>{" "}
            </div>
            <div className="col-xs-2 ml-3 in-block ">
              <button
                onClick={() => this.props.onDelete(this.props.item.id)}
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

export default Item;
