import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import styled from 'styled-components';
import { COLORS } from '../Vars';
import { useNavigate } from 'react-router';

const Top = styled.div`
        display: flex;
        justify-content: space-between;
        max-width: 1440px;
        margin-bottom: 50px;
        span {
            display: flex;
            margin-left: 350px;
            p {
                font-size: 2rem;
                line-height: 40px;
            }
            p:first-of-type {
                color: #2c312b;
            }
            p {
                color: #b08d68;
            }
            span {
                position: relative;
                top: 50%;
                left: 0;
                width: 20px;
                height: 1px;
                background-color: #b08d68;
                margin: 0 15px;
            }
        }
        nav {
            display: flex;
            justify-content: end;
            .next {
                margin-left: 0;
                cursor: pointer;
            }
            .prev {
                cursor: pointer;
            }
        }
`;
const ProjectsSwiperContainer = styled.div`
    position: relative;
    bottom: 250px;
    max-width: 1440px;
    .swiper {
        position: relative;
        left: 350px;
        height: 32rem;
        .swiper-slide {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 100%;
            overflow: hidden;
            background-color: ${COLORS.green};
            cursor: pointer;
            img {
                grid-column: 1/-1;
                grid-row: 1/-1;
                height: 100%;
                width: 145%;
                object-fit: cover;
            }
            .title {
                grid-column: 1/-1;
                grid-row: 1/-1;
                justify-self: start;
                align-self: end;
                margin: 0 0 70px 24px;
                font-size: 1.625rem;
                text-transform: capitalize;
                color: #fff;
                line-height: 1.54;
            }
            .description {
                grid-column: 1/-1;
                grid-row: 1/-1;
                justify-self: start;
                align-self: end;
                margin: 0 0 24px 24px;
                color: #fff;
                line-height: 22px;
                font-size: .875rem;
                padding: 0 50px 0 0;
            }
            &:hover img {
                opacity: .5;
            }
        }
    }
`;

const ProjectsSwiper = (props) => {

    let navigate = useNavigate();
    
    return (
        <>
        <ProjectsSwiperContainer>
        <Top>
        <span>
            <p>Wizualizacje</p>
            <span></span>
            <p>Projekty wnętrz</p>
        </span>
        <nav>
                <span className='prev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20">
<g fill="none" fillRule="evenodd" >
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
        <span className='next'>
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
        </Top>
<Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper_visual"
        navigation={{
            prevEl: ".prev",
            nextEl: ".next"
        }}
        simulateTouch={false}
      >
        <SwiperSlide onClick={() => navigate(props.project1)} ><img src={props.image1} alt="" /><p className="title">dom - Węgrzce</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
        <SwiperSlide onClick={() => navigate(props.project2)} ><img src={props.image2} alt="" /><p className="title">apartament - stańczyka</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
        <SwiperSlide onClick={() => navigate(props.project3)} ><img src={props.image3} alt="" /><p className="title">apartament - rydla</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
        <SwiperSlide onClick={() => navigate(props.project4)} ><img src={props.image4} alt="" /><p className="title">apartament - obozowa</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
        <SwiperSlide onClick={() => navigate(props.project5)} ><img src={props.image5} alt="" /><p className="title">apartament - wieliczka</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
        <SwiperSlide onClick={() => navigate(props.project6)} ><img src={props.image6} alt="" /><p className="title">dom - bibice</p><p className="description">Kompleksowy projekt strefy wejścia, przestrzeni dziennej oraz trzech łazienek.</p></SwiperSlide>
      </Swiper>
      </ProjectsSwiperContainer>
        </>
    );
}

export default ProjectsSwiper;
