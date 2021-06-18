import React, { Fragment, useState } from "react";

const UpdateForm = (props) => {
  const [title, setTitle] = useState(props.meeting.title);
  const [date, setDate] = useState(props.meeting.date);
  const [link, setLink] = useState(props.meeting.link);
  const [important, setImportant] = useState(props.meeting.important);
  const id = props.id;
  const onUpdate = props.onUpdate;
  const updateSignal = props.updateSignal;

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

    onUpdate({ id, title, date, link, important });

    setTitle("");
    setDate("");
    setLink("");
    setImportant(false);

    updateSignal();
  };

  return (
    <Fragment>
      <form className="update-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Update Meeting"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control">
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

        <input type="submit" value="Update" className="btn btn-block" />
      </form>
    </Fragment>
  );
};

export default UpdateForm;
