import React from 'react';
import Products from '../Products/Products';
import ReviewsShow from '../ReviewsShow/ReviewsShow';

import TopBanner from '../TopBanner/TopBanner';
import WorkShop from '../WorkShop/WorkShop';


const Home = () => {
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