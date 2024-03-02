import {
    MDBIcon,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBInput,
    MDBModalFooter
} from 'mdb-react-ui-kit';

import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function SingleFloor() {
    const [basicModal, setBasicModal] = useState(false);
    const [carNumber, setCarNumber] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [exitTime, setExitTime] = useState('');

    useEffect(()=>{
        console.log("information changed");
    });

    const addVehicle = () => {
        
    }



    const toggleOpen = () => setBasicModal(!basicModal);

    const handleSaveChanges = () => {
        console.log("Car number:", carNumber);
        console.log("Entry time:", entryTime);
        console.log("Exit time:", exitTime);
    }

    return (
        <>
            <div
                className={basicModal ? 'blur-background' : ''}
                style={{ backgroundColor: "#BBDEFB", margin: "30px", padding: "70px" }}
                onClick={toggleOpen}
            >
                <MDBIcon fas icon="plus" />
            </div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Enter Parking Details</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput
                                style={{ margin: "20px", padding: "10px" }}
                                label="Entry Time"
                                value={entryTime}
                                onChange={(e) => setEntryTime(e.target.value)}
                            />
                            <MDBInput
                                style={{ margin: "20px", padding: "10px" }}
                                label="Exit Time"
                                value={exitTime}
                                onChange={(e) => setExitTime(e.target.value)}
                            />
                            <MDBInput
                                style={{ margin: "20px", padding: "10px" }}
                                label="Car Number"
                                value={carNumber}
                                onChange={(e) => setCarNumber(e.target.value)}
                            />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Cancel
                            </MDBBtn>
                            <MDBBtn onClick={handleSaveChanges}>Park</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
