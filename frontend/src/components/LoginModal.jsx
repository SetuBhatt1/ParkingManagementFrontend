import {
    MDBIcon,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
  } from 'mdb-react-ui-kit';
  import React, { useState } from 'react';
  
  export default function SingleFloor() {
    const [basicModal, setBasicModal] = useState(false);
    const [carNumber, setCarNumber] = useState('');
    const [entryTime, setEntryTime] = useState('');
  
    const toggleOpen = () => setBasicModal(!basicModal);
  
    const handleSaveChanges = () => {
      // Handle saving the entered information here
      console.log("Car number:", carNumber);
      console.log("Entry time:", entryTime);
      // Add your logic to save the data to your backend or perform any other actions
      toggleOpen(); // Close the modal after saving changes
    };
  
    return (
      <>
        <div className={basicModal ? 'blur-background' : ''}>
          <div style={{ backgroundColor: "#BBDEFB", margin: "30px", padding: "70px" }} onClick={toggleOpen}>
            <MDBIcon fas icon="plus" />
          </div>
          <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
            <MDBModalDialog centered>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Enter Vehicle Details</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBInput
                    label="Car Number"
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                  />
                  <MDBInput
                    label="Entry Time"
                    type="time"
                    value={entryTime}
                    onChange={(e) => setEntryTime(e.target.value)}
                  />
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleOpen}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={handleSaveChanges}>
                    Save changes
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </>
    )
  }
  