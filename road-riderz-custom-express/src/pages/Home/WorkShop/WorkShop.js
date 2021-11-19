import React from "react";
import { Carousel } from "react-bootstrap";
import "./Workshop.css";

const WorkShop = () => {
  return (
    <div className="workshop">
      <div className="special-div">
        <h1 className="text-center  m-5 common-header">
          <b>Our Workshop</b>
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-12 textAlign">
            <h3 className="text-success">We Work hard for our youth</h3>
            <br />
            <h4>
              See more ideas about motorcycle garage, garages, motorcycle. ... A
              place of #creativity #workshop #custom #motorcycle #RoadRiderz
              Garage Studio.we make custom body kits for all bikes on order
              check our pictures. 1214 Dhaka, Dhaka Division, Bangladesh
            </h4>
            <br />
            <h4>
              New Wave custom bike builders have had an undeniable impact on
              motorcycle culture, particularly in the last decade. They’ve
              inspired a new generation of riders, back-garden/shed custom bike
              builders. And, importantly they’ve helped shape factory motorcycle
              design, through bold custom creations. Here we cover custom bike
              builds including cafe racers, bobbers, brat style, scrambler and
              tracker builds. And occasionally, we’ll cover the individuals who
              create the bikes – whether professional workshops or backyard bike
              builders
            </h4>
          </div>
          <div className="col-md-6 col-sm-12">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/zxMx9tZ/42679ec4ff597bd81e9271869e8f4865.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Custo workshop forever </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/1GG9n8Q/unnamed.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>we work for youth </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/ZdVhBK0/atelier-vintage-a-ZZYR8fop1o5.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>speed with customize bike</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShop;
