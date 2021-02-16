import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Profile from '../assets/images/profile.png';


function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
            <img src={Profile} className="profile-pic" alt="profile-pic" />
        </div>

    );
}

export default HomePage;
