import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Loading from "../shared/Loading/Loading";
import SingleModel from "./SingleModel/SingleModel";

const Explore = () => {
  const [allModels, setAllModels] = useState([]);
  const [load, setLoad]=useState(true)
  useEffect(() => {
    setLoad(true)
    fetch("https://polar-thicket-32932.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllModels(data)
        setLoad(false)
      });
     
  }, []);

  console.log(allModels);
  if(load){
    return (<Loading/>)
  }
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
