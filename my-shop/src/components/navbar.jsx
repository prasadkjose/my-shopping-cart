import React, { Component } from "react";

//Since this component has no state, it can be written as a stateless functional component
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <div className="navbar-brand">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
