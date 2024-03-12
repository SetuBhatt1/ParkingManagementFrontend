import { MDBInputGroup, MDBIcon, MDBCardText, MDBCardLink, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import Divider from './Divider';
import React, { useState, useRef, useEffect } from 'react'; // Import React, useState, useRef, and useEffect

const Signup = () => {
    return (
        <>
            <button className='m-2' style={{ backgroundColor: "#BBDEFB" }}>
                <MDBIcon className='p-2' fab icon="google" />
                Signup with Google
            </button>

            <center>
                <Divider text="OR" />

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='text' placeholder="Name" />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='email' placeholder="Email" />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='password' placeholder="Password" />
                </MDBInputGroup>
            </center>

            <button className='m-2' style={{ backgroundColor: "#BBDEFB" }}>
                Signup with Email
            </button>

            {/* onClick event to toggle the modal visibility */}
            <MDBCardText onClick={toggleModal}><MDBCardLink>Already have account? Login</MDBCardLink></MDBCardText>

        </>
    )
}

export default <Logni></Logni>
