import React, { Component } from "react";
import "./Email.css";

export class Email extends Component {
  ValidateEmail(mail) {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        mail
      ) &&
      (mail.endsWith(".edu") || mail.endsWith(".com"))
    ) {
      return true;
    }
    return false;
  }

  emailSubmit = () => {
    var form = document.getElementById("email-form");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);

    const email = document.getElementById("email-input").value;
    if (this.ValidateEmail(email)) {
      document.getElementById("email-success").style.display = "block";
      document.getElementById("email-failure").style.display = "none";
    } else {
      document.getElementById("email-failure").style.display = "block";
      document.getElementById("email-success").style.display = "none";
    }
  };
  render() {
    return (
      <div className="content email">
        <form id="email-form">
          <label>Email: </label>
          <input type="text" id="email-input" />
          <input type="button" onClick={this.emailSubmit} value="Submit" />
        </form>
        <p id="email-success" style={{ display: "none" }}>
          Email succesfully recorded.
        </p>
        <p id="email-failure" style={{ display: "none" }}>
          Invalid email address.
        </p>
      </div>
    );
  }
}

export default Email;
