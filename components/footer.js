import React from 'react';
import { Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer=()=> {
  return (
    <div class="container">
      <Row>
        <Col>
          <h2> Follow Us</h2>

          <a target="_blank" href="https:www.facebook.com">
            <FaFacebook />
          </a>
          <a target="_blank" href="https:www.twitter.com">
            <FaTwitter />
          </a>
          <a target="_blank" href="https:www.github.com">
            <FaGithub />
          </a>
          <a target="_blank" href="https:www.instagram.com">
            <FaInstagram />
          </a>
        </Col>
        <Col>
          <h2>Contact Us</h2>
          <div>
            <div className='phone'>
               <p>
                 Phone
               </p>
               <p>1-888-123-456-89</p>
            </div>
            <div classNmae="email">
              <p>Example@gmail.com</p>
            </div>
          </div>
        </Col>
        <Col>
          <h3>Information</h3>
          <p>
            <a href="#">About Us</a>
          </p>
          <p>
            <a href="#">Help</a>
          </p>
          <p>
            <a href="#">Feedback</a>
          </p>
          <p>
            <a href="#">Terms and Conditions</a>
          </p>
        </Col>
      </Row>
      <hr />
      <div id="copyright">
        <p>
          Copyright <span>&copy;</span>2019 Fusion Informatics Limited.ALL
          Rights Reserved
        </p>
      </div>
    </div>
  );
}
export default Footer
