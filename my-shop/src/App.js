import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [
        { id: 1, value: 5, item: "" },
        { id: 2, value: 0, item: "" },
        { id: 3, value: 0, item: "" },
        { id: 4, value: 0, item: "" },
      ],
    };
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (newCounters) => newCounters.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((resetedCounter) => {
      resetedCounter.value = 0;
      return resetedCounter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleAdd = () => {
    const indexNew = this.state.counters.length + 1;
    const newCounter = { id: indexNew, value: 0, item: "" };
    let newCounters = [...this.state.counters];
    newCounters.push(newCounter);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <div className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            counters={this.state.counters}
          ></Counters>
        </div>
      </React.Fragment>
    );
  }
}
