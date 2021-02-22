import React, { Component, Fragment } from "react";
import "./Tab.css";

export class Tab extends Component {
  getValue = () => {
    if (this.props && this.props.getTab) {
      this.props.getTab(this.props.index);
    }
  };

  render() {
    var index = this.props.index;
    var tab = this.props.tab;
    return (
      <Fragment>
        <input
          type="radio"
          id={`tab-${index}`}
          name="tab-label"
          className="tab-input"
          onInput={this.getValue}
          defaultChecked={this.props.checked}
        />
        <label className="tab-label" htmlFor={`tab-${index}`} id={`tab-${tab}`}>
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </label>
      </Fragment>
    );
  }
}

export default Tab;
