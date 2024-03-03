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

export default function SingleFloor() {
    const [basicModal, setBasicModal] = useState(false);
    const [carNumber, setCarNumber] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [exitTime, setExitTime] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const inputRef = useRef(null);

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

    const sendDataOnPark = async () => {
        const data = await fetch("http://localhost:8080/vehicle/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "vehicleNumber": carNumber })
        });

        console.log("sent data successfully");

        try {
            setIsAvailable(prevState => !prevState); // Toggle the state
            setBasicModal(false);
        } catch (error) {
            console.error('Error sending data to the backend:', error);
        }
    };

    const removeDataOnUnpark = async () => {
        try {
            const response = await fetch(`http://localhost:8080/vehicle/remove/${carNumber}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log("Vehicle removed successfully");
            } else {
                console.error("Failed to remove vehicle");
            }


            setIsAvailable(prevState => !prevState); // Toggle the state
            setBasicModal(false);


        } catch (error) {
            console.error('Error removing vehicle:', error);
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
                            {isAvailable ? (
                                <MDBInput
                                    style={{ margin: "20px", padding: "10px" }}
                                    label="Car Number"
                                    value={carNumber}
                                    onChange={(e) => setCarNumber(e.target.value)}
                                    ref={inputRef}
                                />
                            ) : (
                                <p style={{ margin: "20px", padding: "10px" }}>Car Number: {carNumber}</p>
                            )}
                            {isAvailable ? (
                                <MDBInput
                                    style={{ margin: "20px", padding: "10px" }}
                                    label="Entry Time"
                                    value={entryTime}
                                    onChange={(e) => setEntryTime(e.target.value)}
                                />
                            ) : (
                                <MDBInput
                                    style={{ margin: "20px", padding: "10px" }}
                                    label='Exit Time'
                                    value={exitTime}
                                    onChange={(e) => setExitTime(e.target.value)}
                                />
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
