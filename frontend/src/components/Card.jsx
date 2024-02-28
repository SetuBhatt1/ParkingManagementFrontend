import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Card(props) {
    return (
        <MDBCard className='m-2'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />

            <MDBCardBody>
                <MDBCardText>
                    Car ID : {props.carNumber}
                </MDBCardText>
                <MDBCardText>
                    Entry Time : {props.entryTime}
                </MDBCardText>
                <MDBCardText>
                    Exit Time : {props.exitTime}
                </MDBCardText>
                <MDBCardText>
                    Date : {props.date}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
}

