import React from "react";
import { Carousel } from "react-bootstrap";
import "./Falcon.css";

const Falcon = () => {
  return (
    <div className="falcon">
      <h1 className="trainer">Team Falcon is RRz Highway Team</h1>
      <h4 className="textAlign">
        Road Riderz Team Falcon is a fully Highway Wing of Road Riderz,RRz. RRz
        Falcon founded in 2013 at Hawdi and First official tour in 2014
        Sylhet-MowloviBazar, Actually RRz Team falcon Promote our beautiful
        Bangladesh, We explore remote area, and highlighting underrated place.
        All Falcons must have a driving license, Team Falcon Maintain some rules
        for Highway.
      </h4>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 col-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/PYhbckM/falcon1.pngv"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>Team Falcon in Srimongol,MowloviBazar</h3>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/MchTWXb/falcon2-1.png"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3 className="text-dark">RRz Falcon in Mithamoin-AustoGram</h3>
                
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/SX2q84c/falcon3.png"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>RRz Meeting is rolling</h3>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6 col-12">new onek kichu</div>
      </div>
    </div>
  );
};

export default Falcon;
