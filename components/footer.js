import React from 'react';

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
 
  FaMailBulk
} from "react-icons/fa";
import { IoIosMail, IoIosCall } from "react-icons/io";

const Footer=()=> {
  return (
    <div>
      <div className="footer-header">
        <div className="follow-flex">
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
        <div className="contacts-flex">
          <h2>Contact Us</h2>
          <div id="us-flex">
            <div id="us-1">
            <IoIosCall />
              <p className="us-note">
                Mobile-No:<span id="mobile">1-888-888-888</span>
              </p>
            </div>
            <div id="us-1">
            <IoIosMail />
              <p className="us-note">
                Email: <span id="mobile">example@gmail.com</span>
              </p>
            </div>
          </div>
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
