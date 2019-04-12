import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
const Carosel=()=>{
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img 
              height={400}
              className="carosel-image"
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg "
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 id="carosel-h">
                LETS GET <span id="carosel-h-sub">LOST</span>{" "}
              </h1>
              <p>Malang will never disappointed you</p>
              <p>
                From every step you took you will be amazed and suddenly
                fallin love with malang
              </p>
              <button id="carosel-button">SET ITTINERY NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="carosel-image"
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 id="carosel-h">
                LETS GET <span id="carosel-h-sub">LOST</span>{" "}
              </h1>
              <p>Malang will never disappointed you</p>
              <p>
                From every step you took you will be amazed and suddenly
                fallin love with malang
              </p>
              <button id="carosel-button">SET ITTINERY NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="carosel-image"
              className="d-block w-100"
              src="https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 id="carosel-h">
                LETS GET <span id="carosel-h-sub">LOST</span>{" "}
              </h1>
              <p>Malang will never disappointed you</p>
              <p>
                From every step you took you will be amazed and suddenly
                fallin love with malang
              </p>
              <button id="carosel-button">SET ITTINERY NOW</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
}
export default Carosel

