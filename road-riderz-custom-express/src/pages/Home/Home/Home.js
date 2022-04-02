import AOS from "aos";
import React, { useEffect } from 'react';
import Products from '../Products/Products';
import ReviewsShow from '../ReviewsShow/ReviewsShow';

import TopBanner from '../TopBanner/TopBanner';
import WorkShop from '../WorkShop/WorkShop';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const Home = () => {
    useEffect(()=>{
        AOS.init({
            // initialise with other settings
            duration : 2000
          });
    })
    

    return (
        <div style={{paddingBottom:"150px"}}>
            <TopBanner></TopBanner>
            <Products></Products>
            <WorkShop></WorkShop>
            <ReviewsShow></ReviewsShow>
           
        </div>
    );
};

export default Home;


//---------Thanks to you fo your time and support------------------- 