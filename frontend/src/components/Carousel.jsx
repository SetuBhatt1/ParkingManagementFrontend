import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showIndicators interval={3000} style={{ width: "50vw", margin: 0, padding: 0 }}>
            <MDBCarouselItem itemId={1}>
                <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
                <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
                <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
            </MDBCarouselItem>
        </MDBCarousel>
    );
}