import React from 'react';
import Swiper from '../Components/Swiper';
import { HEADER_IMAGES } from '../Vars';
import ProjectsSwiper from '../Components/ProjectsSwiper';

const HomePage = () => {
    return (
        <>
           <Swiper 
                image1={HEADER_IMAGES.first}
                image2={HEADER_IMAGES.second}
                image3={HEADER_IMAGES.third}
                image4={HEADER_IMAGES.fourth}
                image5={HEADER_IMAGES.fifth}
                image6={HEADER_IMAGES.sixth}
            />
            <ProjectsSwiper
                image1={HEADER_IMAGES.first} project1='wegrzce'
                image2={HEADER_IMAGES.second} project2='stanczyka'
                image3={HEADER_IMAGES.third} project3='rydla'
                image4={HEADER_IMAGES.fourth} project4='obozowa'
                image5={HEADER_IMAGES.fifth} project5='wieliczka'
                image6={HEADER_IMAGES.sixth} project6='bibice'
            />
        </>
    );
}

export default HomePage;