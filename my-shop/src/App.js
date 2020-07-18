import React, { Component, useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import DataService from "./services/services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: this.initState(),
    };
    this.refreshList = this.refreshList.bind(this);
  }

  initState() {
    var initCounters = [];
    DataService.getAll()
      .then((response) => {
        response.data.forEach((element) => {
          initCounters.push({
            id: element.id,
            quantity: element.quantity,
            item: element.item,
            check: false,
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
    return initCounters;
  }

  refreshList() {
    this.initState();
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (newCounters) => newCounters.id !== counterId
    );

    DataService.remove(counterId)
      .then((response) => {
        this.setState({ counters });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
  };

  handleReset = () => {
    const counters = this.state.counters.map((resetedCounter) => {
      resetedCounter.quantity = 0;
      return resetedCounter;
    });
    this.setState({ counters });

    var dataToUpdate = { quantity: 0 };

    DataService.updateAll(dataToUpdate)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleIncrement = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].quantity++;
    let data = { quantity: newCounters[index].quantity };

    //console.log(counter.id);
    DataService.update(counter.id, data)
      .then((response) => {
        this.setState({ counters: newCounters });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
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
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].item = text;
    this.setState({ counters: newCounters });

    //console.log(this.state.counters[index].item);
    //TODO: optimize API calls
    let data = { item: text };
    DataService.update(counter.id, data)
      .then((response) => {
        this.setState({ counters: newCounters });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
  };

  handleChecked = (counter) => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].check = true;
    let data = { check: true };
    DataService.update(counter.id, data)
      .then((response) => {
        this.setState({ counters: newCounters });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    return true;
    
  };

  render() {
    return (
      <React.Fragment>
        <div className="">
          <NavBar
            totalCounters={
              this.state.counters.filter((c) => c.quantity > 0 && !c.check)
                .length
            }
          ></NavBar>
          <Router>
            <div className="container ">
              <Counters
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onTextChange={this.handleTextChange}
                onCheck={this.handleChecked}
                counters={this.state.counters}
              ></Counters>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}
