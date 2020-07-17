import React, { Component, useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import DataService from "./services/services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [{ id: 1, quantity: 5, item: "" }],
    };
    this.initState();
  }

  initState() {
    DataService.getAll()
      .then((response) => {
        var initCounters = [];
        response.data.forEach((element) => {
          initCounters.push({
            id: element.id,
            quantity: element.quantity,
            item: element.item,
          });
        });
        //console.log(initCounters);
        this.setState({ counters: initCounters });
        // console.log("Retrieved " + response.data.length + " items");
        // console.log(this.state);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (newCounters) => newCounters.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((resetedCounter) => {
      resetedCounter.quantity = 0;
      return resetedCounter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].quantity++;
    this.setState({ counters: newCounters });
    let data = { quantity: newCounters[index].quantity };

    console.log(counter.id);
    DataService.update(counter.id, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleAdd = () => {
    const indexNew = this.state.counters.length + 1;
    const newCounter = { id: indexNew, quantity: 0, item: "" };
    let newCounters = [...this.state.counters];
    newCounters.push(newCounter);
    this.setState({ counters: newCounters });

    DataService.create(newCounter)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleTextChange = (text, counter) => {
    console.log(text);
    console.log(counter.quantity);
    //TODO:Update Database
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((c) => c.quantity > 0).length
          }
        ></NavBar>
        <Router>
          <div className="container">
            <Counters
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              onTextChange={this.handleTextChange}
              counters={this.state.counters}
            ></Counters>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
