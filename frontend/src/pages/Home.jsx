import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import LoginSignupButton from '../components/auth/LoginSignupButton';
import AuthDetails from '../components/AuthDetails';

const Home = () => {
    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                {/* <video autoPlay loop muted style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1
                }}>
                    <source src="https://s3.amazonaws.com/random-static.parkwhiz/videos/home-header-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                    <LoginSignupButton />
                    {/* <AuthDetails/> */}
                </div>
                
            </div>
        </>
    );
}

export default Home;
