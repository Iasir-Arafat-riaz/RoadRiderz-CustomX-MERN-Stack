import React from "react";
import { Carousel } from "react-bootstrap";

const TopBanner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pdVsg9s/x2-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Legendary Honda Road Master</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/ggzFmjW/x-5.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>vintage Honda motorbike restoration</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/K7XsVXD/x-6-1.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>vintage Powerfull Monster restoration</h3>
          </Carousel.Caption>
        </Carousel.Item>

       

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sVPKfLf/x3-1.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Ancient Harley-Davidson</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/jVZSTn6/x1-1.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Customization is progress on workshop</h3>
          </Carousel.Caption>
        </Carousel.Item>
       

      </Carousel>
    </div>
  );
};

export default TopBanner;
