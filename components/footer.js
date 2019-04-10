import React from 'react';
import { Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
 
  FaMailBulk
} from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

const Footer=()=> {
  return (
    <div>
      <div className="footer-header">
        <div className='follow-flex'>
          <h2> Follow Us</h2>

          <a
            className="footer-a"
            target="_blank"
            href="https:www.facebook.com"
          >
            <FaFacebook />
          </a>
          <a
            className="footer-a"
            target="_blank"
            href="https:www.twitter.com"
          >
            <FaTwitter />
          </a>
          <a className="footer-a" target="_blank" href="https:www.github.com">
            <FaGithub />
          </a>
          <a
            className="footer-a"
            target="_blank"
            href="https:www.instagram.com"
          >
            <FaInstagram />
          </a>
        </div>
        <div className='contacts-flex'>
        <h2>Contact Us</h2>
        <p>Mobile-No: 1-888-888-888</p>
        <p>Email: example@gmail.com</p>
        </div>
        <div className="info-flex">
          <h3>Information</h3>
          <p>
            <a className="footer-b" href="#">
              About Us
            </a>
          </p>
          <p>
            <a className="footer-b" href="#">
              Help
            </a>
          </p>
          <p>
            <a className="footer-b" href="#">
              Feedback
            </a>
          </p>
          <p>
            <a className="footer-b" href="#">
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
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
