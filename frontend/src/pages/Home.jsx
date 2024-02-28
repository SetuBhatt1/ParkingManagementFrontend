import React from 'react';
import Carousel from "../components/Carousel";
import Form from "../components/Form";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Home = () => {
    return (
        <MDBContainer fluid style={{ backgroundColor: "#E3F2FD", width: "100vw", height: "100vh", position: "fixed", top: "0px", left: "0px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div style={{ position: "relative", top: "25vh", height: "fit-content" }}><Carousel /></div>
            <div style={{ width: "25vw", height: "55vh", position: "relative", top: "25vh", flexGrow: 0.25, marginLeft: "50px", marginRight: "50px" }}><Form /></div>
        </MDBContainer>
    );
}

export default Home;
