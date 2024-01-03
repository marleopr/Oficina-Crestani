import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../../App.css';
import * as s from "./styled";
import Carousel from '../../components/Carousel/Carousel';

export default function HomePage() {
    return (
        <s.Body>
            <s.CarouselStyle>
                <Carousel />
            </s.CarouselStyle>
        </s.Body >
    )
}