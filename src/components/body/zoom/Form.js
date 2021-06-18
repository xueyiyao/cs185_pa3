import React, { Fragment, useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [important, setImportant] = useState(false);
  const onAdd = props.onAdd;

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length > 30) {
      alert("Title can not be more than 30 characters!");
      return;
    }
    if (!title) {
      alert("Please add a title!");
      return;
    }
    if (link.length > 100) {
      alert(
        "The summary of your schedule can not be more than 100 characters!"
      );
      return;
    }
    if (!link.includes("zoom")) {
      alert("This is not a zoom link!");
      return;
    }
    if (Date.parse(date) < Date.now()) {
      alert(
        "Must schedule meeting at a future time! This time has already passed."
      );
      return;
    }

    onAdd({ title, date, link, important });

    setTitle("");
    setDate("");
    setLink("");
    setImportant(false);
  };

  return (
    <div className="form-container">
      <h2>Add a Meeting</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title: </label>
          <input
            type="text"
            placeholder="Add Meeting"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Date: </label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Zoom Link: </label>
          <input
            type="url"
            placeholder="Zoom link to the meeting"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Important</label>
          <input
            type="checkbox"
            checked={important}
            value={important}
            onChange={(e) => setImportant(e.currentTarget.checked)}
          />
        </div>

        <input
          type="submit"
          value="Save Information"
          className="btn btn-block"
        />
      </form>
    </div>
  );
};

export default Form;
