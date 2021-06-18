import React, { Fragment } from "react";
import "./Zoom.css";
import Schedule from "./Schedule";
import Form from "./Form";
import { useState, useEffect } from "react";

const Zoom = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const getMeetings = async () => {
      const meetingsFromServer = await fetchMeetings();
      setMeetings(meetingsFromServer);
    };

    getMeetings();
  }, []);

  const fetchMeetings = async () => {
    const res = await fetch("http://localhost:5000/meetings");
    const data = res.json();
    return data;
  };

  const fetchMeeting = async (id) => {
    const res = await fetch(`http://localhost:5000/meetings/${id}`);
    const data = res.json();
    return data;
  };

  // Add Meeting
  const addMeetings = async (meeting) => {
    const res = await fetch("http://localhost:5000/meetings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meeting),
    });

    const data = await res.json();

    console.log("Meeting in addMeetings:", meetings, data);

    setMeetings([...meetings, data]);
  };

  // Delete a Meeting
  const deleteMeeting = async (id) => {
    const res = await fetch(`http://localhost:5000/meetings/${id}`, {
      method: "DELETE",
    });

    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  // Toggle Reminder
  const updateMeeting = async ({ id, title, date, link, important }) => {
    const updMeeting = {
      title: title,
      date: date,
      link: link,
      important: important,
      id: id,
    };
    const res = await fetch(`http://localhost:5000/meetings/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updMeeting),
    });

    setMeetings(
      meetings.map((meeting) =>
        meeting.id === id
          ? {
              id: meeting.id,
              important: important,
              title: title,
              date: date,
              link: link,
            }
          : meeting
      )
    );
  };

  return (
    <Fragment>
      <div className="zoom-container">
        <Schedule
          className="zoom-schedule"
          meetings={meetings}
          onDelete={deleteMeeting}
          updateMeeting={updateMeeting}
        />
        <div>
          <Form onAdd={addMeetings} />
        </div>
      </div>
    </Fragment>
  );
};

export default Zoom;
