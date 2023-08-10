import React from "react";
import robot_Img from "../assets/img/robots.png";
import "../assets/css/intro.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Intro() {
  const ulStyle = {
    padding: "1rem"
  };
  return (
    <section id="intro">
      <div className="intrContent">
        <span className="content">
          <span className="heading">
            Welcome to World of Robotics
            <br />
          </span>
        </span>
        <span>We provide Wide Range of Solutions for Robots</span>
        <span>
          <ul style={ulStyle}>
            <li>
              Company is pioneering the future of inspection at scale, providing
              products and solutions that are enabling autonomous robots to
              capture and analyze data at an unprecedented level.
            </li>
            <li>
              Its industry-leading technology is pushing the boundaries of the
              possible, going beyond the status quo to deliver billions of
              dollars in risk reduction for some of the world’s biggest
              companies.
            </li>
            <li>
              We’ve curated the brightest minds in autonomy who work every day
              to help protect the world’s most valuable assets and resources,
              delivering the insights needed to inform preventative maintenance
              programs, exceed health and safety targets, and significantly
              reduce CO₂.
            </li>
          </ul>
          <br />
        </span>
        <Carousel>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-0t5p7nu5D9w19nxAF21JE6XNSQ6QTbB4A&usqp=CAU"
              style={{ width: "10rem" }}
            />
          </div>
          <div>
            <img
              src="https://blog-tidychoice.s3.eu-west-2.amazonaws.com/Transition+Files/Images+of+old+blog/5-1/blog+5-1a.jpg"
              style={{ width: "10rem" }}
            />
          </div>
          <div>
            <img
              src="https://www.changiairport.com/content/dam/cacorp/Media-Centre/Resources/Changijourney/Issue46/Mop%20Robot%201.jpeg"
              style={{ width: "10rem" }}
            />
          </div>
        </Carousel>
      </div>
      <img src={robot_Img} alt="robotImg" className="robot_img" />
    </section>
  );
}
