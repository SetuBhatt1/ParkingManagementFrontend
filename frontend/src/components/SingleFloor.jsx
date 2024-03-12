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
    const [slotNumber, setSlotNumber] = useState('');
    const [floorNumber, setFloorNumber] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);
    const [slotStatus, setSlotStatus] = useState('');
    const [validationError, setValidationError] = useState('');

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

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/slots/${slotNumber}`, {
            method: "GET",
        });
        const data = await response.json();
        setSlotStatus(data.status);
    };

    const validateInputs = () => {
        if (!carNumber || !slotNumber || !floorNumber) {
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
        if (!validateInputs()) {
            return;
        }

        const slotData = {
            slotNumber: slotNumber,
            status: 'occupied',
            floor: {
                floorNumber: floorNumber
            }
        };

        const data = await fetch("http://localhost:8080/api/vehicles", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vehicleNumber: carNumber,
                slot: slotData,
                floor: {
                    floorNumber: floorNumber
                }
            })
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
            const response = await fetch(`http://localhost:8080/api/vehicles/${carNumber}`, {
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
                                        value={slotNumber}
                                        onChange={(e) => setSlotNumber(e.target.value)}
                                        onBlur={fetchData}
                                    />
                                    <MDBInput
                                        style={{ margin: "20px", padding: "10px" }}
                                        label="Floor Number"
                                        value={floorNumber}
                                        onChange={(e) => setFloorNumber(e.target.value)}
                                    />
                                </>
                            ) : (
                                <>
                                    <p style={{ margin: "20px", padding: "10px" }}>Car Number: {carNumber}</p>
                                    <p style={{ margin: "20px", padding: "10px" }}>Slot Number: {slotNumber}</p>
                                    <p style={{ margin: "20px", padding: "10px" }}>Floor Number: {floorNumber}</p>
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
