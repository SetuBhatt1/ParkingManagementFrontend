import { MDBInputGroup, MDBIcon, MDBCardText, MDBCardLink, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import Divider from './Divider';

import React, { useState, useRef, useEffect } from 'react'; // Import React, useState, useRef, and useEffect

export default function Form() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            inputRef.current.focus();
        }
    }, [isModalOpen]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleLogin = async () => {
        // Logic for handling login
        try {
            // Perform login actions here
            console.log("Logging in with email:", email, "and password:", password);
            setIsModalOpen(false); // Close the modal after login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <>
            <p className='fs-3'>Create an account</p>

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

            <button className='m-2' style={{ backgroundColor: "#BBDEFB"}}>
                Signup with Email
            </button>

            {/* onClick event to toggle the modal visibility */}
            {/* <MDBCardText onClick={toggleModal}><MDBCardLink>Already have account? Login</MDBCardLink></MDBCardText> */}

            {/* Render modal */}
            <MDBModal open={isModalOpen} setOpen={setIsModalOpen} tabIndex='-1'>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Login</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput
                                style={{ margin: "20px", padding: "10px" }}
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ref={inputRef}
                            />
                            <MDBInput
                                style={{ margin: "20px", padding: "10px" }}
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleModal}>
                                Cancel
                            </MDBBtn>
                            <MDBBtn onClick={handleLogin}>
                                Login
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
