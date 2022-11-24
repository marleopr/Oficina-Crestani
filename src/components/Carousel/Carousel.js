import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';

import * as s from "./styled"

import img1 from "../../assets/carousel/Sem Título-1.jpg"
import img2 from "../../assets/carousel/Sem Título-2.jpg"
import img3 from "../../assets/carousel/Sem Título-3.jpg"


export default () => (

    <Carousel
        autoPlay
        showArrows={false}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        showIndicators={false}
        showStatus={false}
    >
        <div>
            <img alt="" src={img1} />
            {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
            <img alt="" src={img2} />
            {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
            <img alt="" src={img3} />
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>
);