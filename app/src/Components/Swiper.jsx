import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styled from 'styled-components';

import "swiper/css";
import "swiper/css/navigation";

const SwiperContainer = styled.section`
    position: relative;
    top: -400px;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    nav {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .prev_container {
            position: relative;
            left: 70px;
            transition: .2s ease-in-out;
            cursor: pointer;
            &:hover {
                left: 65px;
            }
        }
        .next_container {
            position: relative;
            right: 70px;
            transition: .2s ease-in-out;
            cursor: pointer;
            &:hover {
                right: 65px;
            }
        }
    }
    .mySwiper {
        width: 1244px;
        height: 36.25rem;
    }
    img {
        width: 100%;
        object-fit: cover;
    }
`;


const SwiperBig = (props) => {
    return (
        <>
        <SwiperContainer>
            <nav>
                <span className='prev_container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20">
<g fill="none" fillRule="evenodd">
        <g>
            <g>
                <g>
                    <g>
                        <path fill="#B08D68" d="M31.666 9.627L26 3.573c-.024-.026-.024-.066 0-.092l.402-.429c.025-.027.067-.028.094-.003l.003.003L33 9.999l-6.5 6.949c-.025.027-.067.028-.094.003l-.003-.003-.402-.43c-.024-.025-.024-.065 0-.09l5.665-6.056h-28.6c-.036 0-.066-.03-.066-.066v-.612c0-.037.03-.067.067-.067h28.599z" transform="translate(-1250 -892) translate(0 862) translate(82) translate(1168 30) matrix(-1 0 0 1 36 0)"/>
                    </g>
                </g>
            </g>
        </g></g></svg>
        </span>
        <span className='next_container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="21" viewBox="0 0 40 21">
    <g fill="none" fillRule="evenodd">
        <g>
            <g>
                <g>
                    <g>
                        <path fill="#2C312B" d="M35.666 9.627L30 3.573c-.024-.026-.024-.066 0-.092l.402-.429c.025-.027.067-.028.094-.003l.003.003L37 9.999l-6.5 6.949c-.025.027-.067.028-.094.003l-.003-.003-.402-.43c-.024-.025-.024-.065 0-.09l5.665-6.056h-28.6c-.036 0-.066-.03-.066-.066v-.612c0-.037.03-.067.067-.067h28.599z" transform="translate(-1324 -3658) translate(0 3146) translate(76 284) translate(1248 228.5)"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</span>
            </nav>
            <Swiper 
                modules={[Navigation]} 
                className="mySwiper"
                navigation={{
                    prevEl: ".prev_container",
                    nextEl: ".next_container"
                }}
                simulateTouch={false}
                >
                <SwiperSlide>
                    <img src={props.image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.image5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.image6} alt="" />
                </SwiperSlide>
            </Swiper>
        </SwiperContainer>
        </>
    );
}

export default SwiperBig;
