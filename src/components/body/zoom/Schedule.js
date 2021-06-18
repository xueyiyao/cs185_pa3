import React from "react";
import MeetingCard from "./MeetingCard";
import "./Schedule.css";
const Schedule = (props) => {
  const meetings = props.meetings;
  const deleteMeeting = props.onDelete;
  const updateMeeting = props.updateMeeting;

  var schedule = <label>No Meetings Scheduled!</label>;
  if (meetings && meetings.length != 0) {
    schedule = meetings.map((meeting) => {
      return (
        <MeetingCard
          key={meeting.id}
          meeting={meeting}
          onDelete={deleteMeeting}
          updateMeeting={updateMeeting}
        />
      );
    });
  }

  return (
    <div className="schedule-container">
      <h2>Schedule</h2>
      {schedule}
    </div>
  );
};

export default Schedule;
