import React, { Component, Fragment } from "react";
import "./Body.css";
import Text from "./body/Text";
import Image from "./body/Image";
import Table from "./body/Table";
import Video from "./body/Video";
import Email from "./body/Email";

export class Body extends Component {
  getBody = () => {
    var selectedTab = this.props.selectedTab;
    switch (selectedTab) {
      case 0:
        return <Text />;
      case 1:
        return <Image />;
      case 2:
        return <Video />;
      case 3:
        return <Table />;
      case 4:
        return <Email />;
      default:
        return "";
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.checkPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkPosition);
  }

  checkPosition = () => {
    var goToTopButton = document.getElementById("go-to-top-button");
    var quarter = document.body.scrollHeight / 4;
    if (
      document.body.scrollTop > quarter ||
      document.documentElement.scrollTop > quarter
    ) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  };

  goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <Fragment>
        {this.getBody()}
        <button id="go-to-top-button" onClick={this.goToTop}>
          Top
        </button>
      </Fragment>
    );
  }
}

export default Body;
