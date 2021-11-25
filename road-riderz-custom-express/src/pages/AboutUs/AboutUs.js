import React from "react";
import { Carousel } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div style={{ paddingBottom: "150px", margin: "30px" }}>
      <h2 className="about-header">About Road Riderz MotorBike Community</h2>
      <div className="trainer-div">
        <div className="trainer-detail">
          <div className="tariner-des">
            <h4 className="trainer">Intro Of RoadRiderz, RRz.</h4>
            <p className="textAlign">WE ARE A BIKE RIDING & PROFESSIONAL STUNT COMMUNITY & WE STARTED THIS COMMUNITY WITH A VISON AND AN AIM TO ACHIVE SOME GOALS IN FUTURE . WE HAVE THE COURAGE & WILLINGNESS TO ACHIVE THOSE GOALS !!!</p>
            <p className="textAlign">
              {" "}
              Road Riderz (RRZ) First ever TOUR BASED group in Bangladesh …… It
              was one fine evening when some friends got into a discussion
              regarding bikes/motor cycles , road safety , accident , teenage
              life , drugs & etc . Which eventually ended up to an idea & dream
              to form a BIKERS CLUB/GROUP. Then after a while all the
              preparation & hard work done by the founders, came the day when
              officially launched Road Riders on May 1st 2012 with a vision to
              change the “ERA of bike riding in BD “. Our 1st/Major Goal is to
              present our country Bangladesh to the world & thus we are the
              first ever TOUR BASED group in Bangladesh. We travel around all
              over the country to different historical places, tourists spots &
              other important places . And create a documentary about those
              places . Bike stunting already became a well known sports in the
              other parts of the world but in BD it’s still not that much talked
              about . Thus we RRz are trying to make youngsters inspired & make
              BIKE STUNTING a national sports in BD.
            </p>
            <br />
          </div>
        </div>
        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/Cm6TpmP/rrz2-1.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Team Road Riderz, RRz</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/RyNj6G6/rrz.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Road Riderz Family</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/DwC34CC/rrz-Meeting.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>RRz Meeting is rolling</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="social">
        <h1 className="about-header"> Social Media </h1>
      <br />
        <a target="_blank" href="https://www.facebook.com/RoadRiderzRRz">
          FaceBook
        </a>
        {/* <span>"   "</span> */}
       
        <a target="_blank" href="https://www.youtube.com/c/RoadRiderzRRz">
          Youtube
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
