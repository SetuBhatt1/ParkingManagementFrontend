import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Divider({ text }) {
    return (
        <MDBContainer className="d-flex align-items-center justify-content-center" style={{ height: "2px", width: "80%", margin: "20px  0px", backgroundColor: "#ccc" }}>
            <span style={{ padding: "0px  10px", backgroundColor: "#E3F2FD", color: "#000" }}>{text}</span>
        </MDBContainer>
    );
}
