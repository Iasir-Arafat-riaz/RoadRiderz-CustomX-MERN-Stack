import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleModel from "./SingleModel/SingleModel";

const Explore = () => {
  const [allModels, setAllModels] = useState([]);
  useEffect(() => {
    fetch("https://mighty-caverns-68467.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllModels(data));
  }, []);

  console.log(allModels);
  return (
    <div style={{paddingBottom:"150px"}}>
      <div className="custom-product">
        <h1 className="common-header">All Customize bike is here</h1>
        <Row xs={1} md={3} className="g-4 m-3">
          {allModels.map((model, index) => (
            <SingleModel key={index} model={model}></SingleModel>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Explore;
