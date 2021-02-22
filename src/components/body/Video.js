import React, { Component, Fragment } from "react";
import "./Video.css";

export class Video extends Component {
  videoSrc = [
    "https://www.youtube.com/embed/S77A_7w7LYk",
    "https://www.youtube.com/embed/KMc3vL_MIeo",
    "https://www.youtube.com/embed/8qRZcXIODNU",
    "https://www.youtube.com/embed/-QlxCQThAI8",
    "https://www.youtube.com/embed/H1KP4ztKK0A",
  ];

  popupVideo = (index) => {
    document.getElementById("popup-overlay-video").style.display = "block";
    document.getElementById("popup-video").src = this.videoSrc[index];
  };

  popupOff = () => {
    document.getElementById("popup-overlay-video").style.display = "none";
    document.getElementById("popup-video").src = "";
  };

  render() {
    return (
      <Fragment>
        <div className="content video">
          <div className="row">
            {this.videoSrc.map((video, index) => {
              return (
                <div key={`vid-col-${index}`} className="col-3">
                  <div
                    className="video-overlay"
                    id={`video-overlay-${index}`}
                    onClick={() => this.popupVideo(index)}
                  >
                    <iframe
                      src={video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      id={`video-${index}`}
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="overlay"
          id="popup-overlay-video"
          onClick={this.popupOff}
        >
          <iframe
            src=""
            id="popup-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Fragment>
    );
  }
}

export default Video;
