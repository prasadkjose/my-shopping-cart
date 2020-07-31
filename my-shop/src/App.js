import React, { Component, useState } from "react";
import Items from "./components/items";
import NavBar from "./components/navbar";
import DataService from "./services/services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles, ToggleStyle } from "./styles/globalStyles";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import "./styles/app.css";

export default class App extends Component {
  /**
   * App component constructor.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      items: this.initState(),
      theme: "light",
    };
    this.refreshList = this.refreshList.bind(this);
  }

  /** Function to toggle light and dark mode. */
  toggleTheme = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  /** Function to initialize App component state from DB. */
  initState() {
    var initItems = [];
    DataService.getAll()
      .then((response) => {
        response.data.forEach((element) => {
          initItems.push({
            id: element.id,
            quantity: element.quantity,
            item: element.item,
            check: false,
          });
        });
        //console.log(initCounters);
        this.setState({ items: initItems });
        // console.log("Retrieved " + response.data.length + " items");
        // console.log(this.state);
      })
      .catch((e) => {
        console.log(e);
      });
    return initItems;
  }

  /** Function to initialize App component state from DB. */
  refreshList() {
    this.initState();
  }

  /**
   * Function to delete individual item.
   * @param {string} itemId - The ID of the counter item.
   */
  handleDelete = (itemId) => {
    const newItems = this.state.items.filter((i) => i.id !== itemId);
    DataService.remove(itemId)
      .then((response) => {
        this.setState({ items: newItems });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
  };

  /** Function to reset all items. */
  handleReset = () => {
    const newItems = this.state.items.map((resetedItems) => {
      resetedItems.quantity = 0;
      return resetedItems;
    });
    this.setState({ items: newItems });
    var dataToUpdate = { quantity: 0 };
    DataService.updateAll(dataToUpdate)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /**
   * Function to increment individual item.
   * @param {item} item - The item object to be incremented.
   */
  handleIncrement = (item) => {
    const newItems = [...this.state.items];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].quantity++;
    let data = { quantity: newItems[index].quantity };
    //console.log(item.id);
    DataService.update(item.id, data)
      .then((response) => {
        this.setState({ items: newItems });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
  };

  /** Adds a new item to the state and DB */
  handleAdd = () => {
    const indexNew = this.state.items.length + 1;
    const newItem = { id: indexNew, quantity: 0, item: "" };
    let newItems = [...this.state.items];
    newItems.push(newItem);
    this.setState({ items: newItems });

    DataService.create(newItem)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /**
   * Takes the Item text dynamically typed by user.
   * @param {string} text
   * @param {item} item
   */
  handleTextChange = (text, item) => {
    const newItems = [...this.state.items];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].item = text;
    this.setState({ items: newItems });
    //console.log(this.state.items[index].item);
    //TODO: optimize API calls
    let data = { item: text };
    DataService.update(item.id, data)
      .then((response) => {
        this.setState({ items: newItems });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.refreshList();
  };
  /**
   * Update checked value of item
   * @param {item} item
   */
  handleChecked = (item) => {
    const newItems = [...this.state.items];
    const index = newItems.indexOf(item);
    newItems[index] = { ...item };
    newItems[index].check = true;
    let data = { check: true };
    DataService.update(item.id, data)
      .then((response) => {
        this.setState({ items: newItems });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    return true;
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />
          <div className="">
            <NavBar
              totalItems={
                this.state.items.filter((c) => c.quantity > 0 && !c.check)
                  .length
              }
            ></NavBar>
            <Router>
              <div className="container ">
                <ToggleStyle>
                  <BootstrapSwitchButton
                    checked={"dark"}
                    onlabel="Dark"
                    offlabel="Light"
                    onstyle="dark"
                    offstyle="light"
                    style="border"
                    onChange={this.toggleTheme}
                    width={100}
                  />
                </ToggleStyle>
                <Items
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDelete={this.handleDelete}
                  onAdd={this.handleAdd}
                  onTextChange={this.handleTextChange}
                  onCheck={this.handleChecked}
                  items={this.state.items}
                ></Items>
              </div>
            </Router>
          </div>
        </>
      </ThemeProvider>
    );
  }
}
