import React, { Component } from "react";
import "./App.css";
import Body from "./components/Body";
import TabList from "./components/TabList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
    };
    this.changeTab = (tab) => {
      console.log(tab);
      this.setState({ selectedTab: tab });
    };
  }

  render() {
    return (
      <div>
        <TabList
          selectedTab={this.state.selectedTab}
          changeTab={this.changeTab}
        />
        <Body selectedTab={this.state.selectedTab} />
      </div>
    );
  }
}

export default App;
