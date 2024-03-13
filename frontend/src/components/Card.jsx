import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Card({ carNumber, entryTime, exitTime }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardStyle = {
        backgroundColor: "#BBDEFB",
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
    };

    return (
        <MDBCard
            className='m-2'
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' /> */}

            <MDBCardBody>
                <MDBCardText>
                    Car Number: {carNumber}
                </MDBCardText>
                <MDBCardText>
                    Entry Time: {new Date(entryTime).toLocaleString()}
                </MDBCardText>
                <MDBCardText>
                    Exit Time: {new Date(exitTime).toLocaleString()}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}
