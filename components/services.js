import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { FaLaptop,FaMap,FaHeart} from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io'

const Services=()=> {
  return (
    <div className='services'>
      
      <div className='services-heading'>
        <h1>Our Services</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
     
      <div className='services-flex'>
        <div className="services-col">
          <div className="services-icon1">
            <FaLaptop className="icon1" />
          </div>
          <p>Fully Responsive</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        <div className="services-col">
          <div className="services-icon1">
            <IoMdSettings className="icon1" />
          </div>
          <p>Easy Customize</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        <div className="services-col">
          <div className="services-icon1">
            <FaMap className="icon1" />
          </div>
          <p>Seo Ready</p>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </div>
        <div className="services-col">
          <div className="services-icon1">
            <FaHeart className="icon1" />
          </div>
          <p>Made With Love</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
        </div>
      </div>
    </div>
  );
}

export default Services