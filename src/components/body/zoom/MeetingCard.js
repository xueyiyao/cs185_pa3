import React, { useEffect, useState } from "react";
import UpdateForm from "./UpdateForm";
import "./MeetingCard.css";

const MeetingCard = (props) => {
  const [signal, setSignal] = useState(false);
  const meeting = props.meeting;
  const onDelete = props.onDelete;
  const onUpdate = props.updateMeeting;
  const offset = new Date(meeting.date).getTimezoneOffset();
  const d = new Date(new Date(meeting.date).getTime() - offset * 60 * 1000);
  const date = d.toISOString().split("T")[0];
  const time = d.toISOString().split("T")[1].split(".")[0];

  const updateSignal = () => {
    setSignal(!signal);
  };

  var card = (
    <div className="meeting-card" onDoubleClick={updateSignal}>
      <div className="card-text">
        <label className="card-title">{meeting.title}</label>
        <label className="card-date">
          {date} @ {time}
        </label>
        <a href={meeting.link} className="card-link">
          {meeting.link}
        </a>
        {meeting.important && (
          <label className="card-important-tag">Important</label>
        )}
      </div>
      <div className="card-other">
        {/* <div className="card-delete" onClick={() => onDelete(meeting.id)}></div> */}
        <a class="close" onClick={() => onDelete(meeting.id)}></a>
      </div>
    </div>
  );
  if (signal) {
    card = (
      <div className="meeting-card">
        <div className="card-text">
          <UpdateForm
            id={meeting.id}
            onUpdate={onUpdate}
            updateSignal={updateSignal}
            meeting={meeting}
          />
        </div>
      </div>
    );
  }
  return <div>{card}</div>;
};

export default MeetingCard;
