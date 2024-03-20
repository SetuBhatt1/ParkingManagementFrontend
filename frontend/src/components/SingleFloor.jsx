import React, { useState, useEffect, useRef } from 'react';
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
import { auth } from '../firebase';
import axios from 'axios';

export default function SingleFloor({ floorNumber, slotNumber }) {
    const [basicModal, setBasicModal] = useState(false);
    const [carNumber, setCarNumber] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [exitTime, setExitTime] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [slotStatus, setSlotStatus] = useState('');
    const [validationError, setValidationError] = useState('');
    const [floorNumberState, setFloorNumber] = useState(''); // Define floorNumber state
    const [slotNumberState, setSlotNumber] = useState(''); // Define slotNumber state

    const inputRef = useRef(null);

    // Set initial floor and slot numbers
    useEffect(() => {
        setFloorNumber(floorNumber);
        setSlotNumber(slotNumber);
    }, [floorNumber, slotNumber]);

    useEffect(() => {
        const currentTime = new Date().toLocaleTimeString();
        setEntryTime(currentTime);
        if (!isAvailable) {
            setExitTime(currentTime);
        }
    }, [isAvailable]);

    useEffect(() => {
        if (basicModal && isAvailable) {
            inputRef.current.focus();
        }
    }, [basicModal, isAvailable]);

    const toggleOpen = () => setBasicModal(!basicModal);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/slots/${slotNumberState}`, {
            method: "GET",
        });
        const data = await response.json();
        setSlotStatus(data.status);
    };

    const validateInputs = () => {
        if (!carNumber || !slotNumberState || !floorNumberState) {
            setValidationError('All fields are required.');
            return false;
        }
        if (slotStatus === "OCCUPIED") {
            setValidationError("Slot is already occupied. Please choose another slot.");
            return false;
        }
        setValidationError('');
        return true;
    };

    const sendDataOnPark = async () => {
        console.log(`Attempting to park on floor: ${floorNumberState}`); 
        if (!validateInputs()) {
            return;
        }

        const slotData = {
            slotNumber: slotNumberState,
            status: 'occupied',
            floor: {
                floorNumber: floorNumberState
            }
        };

        try {
            const idToken = await auth.currentUser.getIdToken();
            const response = await axios.post(`http://localhost:8080/api/vehicles`, {
                vehicleNumber: carNumber,
                slot: slotData,
                floor: {
                    floorNumber: floorNumberState
                }
            }, {
                headers: { Authorization: `Bearer ${idToken}`, 'Content-Type': 'application/json' }
            });

            console.log("Vehicle added successfully:", response.data);
            setIsAvailable(prevState => !prevState); // Toggle the state
            setBasicModal(false);
        } catch (error) {
            console.error('Error sending data to the backend:', error);
            setValidationError('Failed to park the vehicle. Please try again.');
        }
    };

    const removeDataOnUnpark = async () => {
        try {
            const idToken = await auth.currentUser.getIdToken();
            const response = await axios.delete(`http://localhost:8080/api/vehicles/${carNumber}`, {
                headers: { Authorization: `Bearer ${idToken}` }
            });

            if (response.status === 200) {
                console.log("Vehicle removed successfully");
            } else {
                console.error("Failed to remove vehicle");
            }

            setIsAvailable(prevState => !prevState); // Toggle the state
            setBasicModal(false);

        } catch (error) {
            console.error('Error removing vehicle:', error);
            setValidationError('Failed to unpark the vehicle. Please try again.');
        }
    }

    const handleUnpark = () => {
        setIsAvailable(false);
        removeDataOnUnpark(); // Call removeDataOnUnpark when unparking
    }

    return (
        <>
            <div
                className={basicModal ? 'blur-background' : ''}
                style={{ backgroundColor: "#BBDEFB", margin: "30px", padding: "70px" }}
                onClick={toggleOpen}
            >
                {isAvailable ? <MDBIcon fas icon="plus" /> : <MDBIcon fas icon="minus" />}
            </div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Enter Parking Details</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {validationError && (
                                <p style={{ color: 'red', marginBottom: '10px' }}>{validationError}</p>
                            )}
                            {isAvailable ? (
                                <>
                                    <MDBInput
                                        style={{ margin: "20px", padding: "10px" }}
                                        label="Car Number"
                                        value={carNumber}
                                        onChange={(e) => setCarNumber(e.target.value)}
                                        ref={inputRef}
                                    />
                                    <MDBInput
                                        style={{ margin: "20px", padding: "10px" }}
                                        label="Slot Number"
                                        value={slotNumberState}
                                        onChange={(e) => setSlotNumber(e.target.value)}
                                        onBlur={fetchData}
                                    />
                                    <MDBInput
                                        style={{ margin: "20px", padding: "10px" }}
                                        label="Floor Number"
                                        value={floorNumberState}
                                        onChange={(e) => setFloorNumber(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <p style={{ margin: "20px", padding: "10px" }}>Car Number: {carNumber}</p>
                                    <p style={{ margin: "20px", padding: "10px" }}>Slot Number: {slotNumberState}</p>
                                    <p style={{ margin: "20px", padding: "10px" }}>Floor Number: {floorNumberState}</p>
                                </>
                            )}
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleOpen}>
                                Cancel
                            </MDBBtn>
                            <MDBBtn onClick={isAvailable ? sendDataOnPark : handleUnpark}>
                                {isAvailable ? "Park" : "Unpark"}
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
