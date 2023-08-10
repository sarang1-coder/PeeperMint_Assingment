import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Products() {
  return (
    <>
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
    </>
  );
}
