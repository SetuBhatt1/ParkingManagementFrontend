import React, { useEffect, useState } from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Carousel() {
    const [carouselHeight, setCarouselHeight] = useState('100vh');

    useEffect(() => {
        // Assuming navbar height is  60px
        const navbarHeight = 60; // replace with your navbar's actual height
        const viewportHeight = window.innerHeight;
        const newHeight = viewportHeight - navbarHeight;
        setCarouselHeight(newHeight + 'px');
    }, []);

    return (
        <div style={{ position: "absolute", left: 0, top: "10vh", width: "70vw", overflow: "hidden", height: carouselHeight }}>
            <MDBCarousel showIndicators interval={3000} style={{ width: "100%", height: "100%" }}>
                <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' style={{ height: "90vh" }} />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' style={{ height: "90vh" }} />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' style={{ height: "90vh" }} />
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    );
}
