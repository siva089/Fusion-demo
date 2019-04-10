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
              src="https://image.freepik.com/free-vector/pano-building-abstract-blue_72787-222.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>React js</h3>
              <p>Most Trending React FrameWork</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="carosel-image"
              className="d-block w-100"
              src="https://image.freepik.com/free-vector/night-flights-from-city-airport-cartoon_1441-2729.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Graph Ql</h3>
              <p>A best Alternative to REST Api's</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={400}
              className="carosel-image"
              className="d-block w-100"
              src="https://image.freepik.com/free-vector/miami-skyline-design-concept-business-travel-tourism-presentation_1284-9049.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Node Js</h3>
              <p>
                Node.js's npm Is Now The Largest Package Registry in the
                World
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
}
export default Carosel

