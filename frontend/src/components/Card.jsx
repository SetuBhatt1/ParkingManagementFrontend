import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Card({ carNumber, entryTime, exitTime }) {
    return (
        <MDBCard className='m-2' style={{ backgroundColor: "#9FA8DA" }}>
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
