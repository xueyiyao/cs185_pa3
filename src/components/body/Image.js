import React, { Component, Fragment } from "react";
import "./Image.css";

export class Image extends Component {
  imageSrc = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Montaje_de_la_Ciudad_de_Buenos_Aires.png",
    "https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72",
    "https://cdn.britannica.com/46/189746-050-C790AE3F/Skyline-Cairo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg/2880px-Hong_Kong_Harbour_Night_2019-06-11.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/2880px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Rio_Collage.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
  ];

  imageAlt = [
    "San Francisco",
    "Buenos Aires",
    "Paris",
    "Cairo",
    "Hong Kong",
    "Sydney",
    "Rio de Janeiro",
    "Tokyo",
  ];

  popupOn = (src) => {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("popup-img").src = src;
  };

  popupOff = () => {
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup-img").src = "";
  };

  render() {
    return (
      <Fragment>
        <div className="content image">
          <div className="row">
            {this.imageSrc.map((img, index) => {
              return (
                <div key={`img-col-${index}`} className="col-3">
                  <img
                    src={img}
                    alt={this.imageAlt[index]}
                    id={`image-${index}`}
                    onClick={() => this.popupOn(img)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="overlay" id="popup-overlay" onClick={this.popupOff}>
          <img id="popup-img" />
        </div>
      </Fragment>
    );
  }
}

export default Image;
