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
        <div className="col-md-6 col-12">
            <p className="textAlign text-secondary"><b>Bangladesh's tourist attractions include historical monuments, resorts, beaches, picnic spots, forests and tribal people, wildlife of various species. Activities for tourists include angling, water skiing, river cruising, hiking, rowing, yachting, and sea bathing. Road Riderz Team falcon is exploring bangladesh and promoting our tourism sector</b></p>
            <br />
            <p className="textAlign text-secondary"><b>RoadRizerz Falcon have huge experienced riderz. Highway tour organized by Falcon leaders, Motorcycle riding gives you an exhilarating feeling of being in the open air while feeling the wind over your body. While riding alone is sometimes the goal, one of the best experiences you can have on a motorcycle is to ride in a group of close friends or family. Together you can enjoy the scenery from the open road and arrive safely to your destination with a few suggested guidelines. </b></p>
        </div>
      </div>
      <br />
      <div>
      <h2 className="about-header">Top Safety Tips For Formation And Group Riding.</h2>
        <p className="textAlign">
          Group riding etiquette dictates that each rider’s skill level should
          be a major factor in forming a motorcycle riding group. Timid and
          green riders need a mentor to teach them the ropes until they are more
          comfortable with the situations that can pop up. A major factor in
          group choice is how fast the riding formation intends to travel. Some
          more veteran bikers may like the thrill of speed. So they can ride up
          front and break away as point men. Novice riders may want to join a
          group that wants to ride at a slower pace. There are a lot of people
          with bagger bikes who choose these groups. Feeling pressured and guilt
          by not wanting to ride at a speed faster than you’re comfortable with
          remains a heavy burden to carry for many. So join a group of
          like-minded individuals. TIP: Loud pipes save lives! Consider custom
          exhausts or a loud bike. Many experienced riders are keen on the idea
          that a car can hear and not just see you show your dominance and
          presence in road traffic. Obviously, a helmet’s hearing protection may
          need to be supplemented for all riders in the group to avoid hearing
          damage or loss. Moreover, riders with extremely loud pipes like race
          pipes or open mufflers may wish to stay in the rear to avoid rumbling
          and jolting the rest of the riding formation. So if you have open
          pipes or a race muffler, consider riding at the far back of the riding
          group.
        </p>
        <br />
        <h2 className="about-header">Leadership Remains Key!</h2>
        <p className="textAlign">
          The group riding leader of Falcon should be among the most experienced
          willing to take on the role. The lead rider is generally the first
          person who will encounter other vehicular traffic, coming and going.
          The leading rider must know how to respond to erratic and distracted
          drivers appropriately. And the lead rider must respond, react, and
          avoid problems carefully before other passengers in the group becoming
          seriously injured or killed. The next most prominent and experienced
          rider remains the “tail rider.” Often this is the rider who plays
          catch up after making sure the other riders made it safely through a
          traffic signal or intersection. The tail rider should also keep an eye
          on stragglers and bikes with mechanical breakdowns, so they don’t
          become stranded or abandoned in some desolate location with no phone
          signal, for example. Most of all, the riding group should look out for
          each other and take personal leadership initiative when called upon.
          Here are some important pre-ride tips and considerations before the
          journey of group riding.
        </p>
        
       
      </div>
    </div>
  );
};

export default Falcon;
