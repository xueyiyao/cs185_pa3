import React, { Component, Fragment } from "react";
import "./TabList.css";
import Tab from "./Tab";

export class TabList extends Component {
  tabs = ["text", "image", "video", "table", "email"];

  render() {
    return (
      <Fragment>
        <div className="tabs">
          {this.tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                tab={tab}
                index={index}
                getTab={this.props.changeTab}
                checked={this.props.selectedTab === index}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default TabList;
