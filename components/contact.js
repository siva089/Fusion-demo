import React from 'react';
import { Row, Col } from "react-bootstrap";
import { FaHome, FaPhone } from "react-icons/fa";


const  Contact=()=> {
  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contact</h2>
      </div>
      <Row >
        <Col xl={6} md={6} sm={6}>
          <form action="">
            <div>
              <input
                className="form-inputs input-1 "
                type="Email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="form-inputs input-2"
                type="text"
                placeholder="Company"
              />

              <input
                className="form-inputs input-3"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="form-inputs input-4"
                rows="4"
                cols="50"
                placeholder="your messages"
              />
            </div>
            <button className="input-5">Send Message</button>
          </form>
        </Col>
        <Col className="contact-or" xl={1} md={1} sm={1}>
          OR
        </Col>
        <Col xl={5} md={5} sm={5} className="contact-address">
          <h2>You can find us here</h2>
          <p>
            <FaHome /> Jl.Danau Bratan sekian Nomer sekian,sawojajar Malang
          </p>
          <p className="map">
            <a
              target="_blank"
              href="https://google.com/maps?q=23.0225,72.5714"
            >
              Find us on Maps
            </a>
          </p>
          <p>
            <FaPhone /> (+62)8816723812
          </p>
          <p>
            <FaPhone /> (+62)8816723813
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Contact