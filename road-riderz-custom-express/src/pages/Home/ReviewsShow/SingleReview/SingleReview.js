import React from "react";
import { Card, Col } from "react-bootstrap";
import "./SingleReview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Aos from "aos";
import { AOS } from "aos";
import "aos/dist/aos.css";
const SingleReview = (props) => {
  const { name, email, rating, cmnt } = props.review;
  const comment = cmnt.slice(0, 40);
  const cmommentFig = `${comment}.....`;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div >
      <Col>
        <Card id="rev" className="singleReview m-2" data-aos="flip-down">
          <Card.Body>
            <Card.Title>
              {" "}
              <h6>
                <b>
                  <FontAwesomeIcon icon={faUser} /> {name}
                </b>
              </h6>
            </Card.Title>

            <p>
              <b>{email}</b>
            </p>
            <Card.Text>
              <p>{cmommentFig}</p>
            </Card.Text>

            {rating === 5 ? (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 5 && rating >= 4 ? (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 4 && rating >= 3 ? (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : rating < 3 && rating >= 2 ? (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            ) : (
              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleReview;
