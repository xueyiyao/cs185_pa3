import React, { Component } from "react";
import "./Text.css";

export class Text extends Component {
  render() {
    return (
      <div className="content text">
        <div className="form name-form">
          <label>First Name:</label>
          <br />
          <input type="text" />
          <br />
          <label>Last Name:</label>
          <br />
          <input type="text" />
          <br />
        </div>
        <div className="form movie-form">
          <label>Favorite Movie:</label>
          <br />
          <input type="radio" id="avengers" name="fav-movie" defaultChecked />
          <label htmlFor="avengers">Avengers</label>
          <br />
          <input type="radio" id="tdk" name="fav-movie" />
          <label htmlFor="tdk">The Dark Knight</label>
          <br />
          <input type="radio" id="tenet" name="fav-movie" />
          <label htmlFor="tenet">Tenet</label>
          <br />
        </div>
        <button>Done</button>
      </div>
    );
  }
}

export default Text;
