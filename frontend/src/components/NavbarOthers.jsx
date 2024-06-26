import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavbarOthers() {
    const [openNavRight, setOpenNavRight] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        navigate('/');
    }

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };

    // Function to determine if a tab is active based on the current location
    const isActiveTab = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <MDBNavbar expand="lg" dark bgColor="dark" className="fixed-top" size='lg'>
                <MDBContainer className="my-2" fluid>
                    <MDBNavbarBrand href="/" className="fs-3">
                        <strong>ParkEase</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarRightAlignExample"
                        aria-controls="navbarRightAlignExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setOpenNavRight(!openNavRight)}
                    >
                        <i className="fas fa-bars"></i>
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavRight}>
                        <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0 fs-5">
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active={isActiveTab("/")}
                                    onClick={() => navigate("/")}
                                    href="/"
                                >
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active={isActiveTab("/dashboard")}
                                    onClick={() => navigate("/dashboard")}
                                    href="/dashboard"
                                >
                                    Dashboard
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Floors
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu bgColor="info">
                                        <MDBDropdownItem>
                                            <MDBNavbarLink
                                                style={{ backgroundColor: "#7986CB" }}
                                                active={isActiveTab("/floor0")}
                                                onClick={() => navigate("/floor0")}
                                                href="/floor0"
                                            >
                                                Floor 0
                                            </MDBNavbarLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBNavbarLink
                                                style={{ backgroundColor: "#7986CB" }}
                                                active={isActiveTab("/floor1")}
                                                onClick={() => navigate("/floor1")}
                                                href="/floor1"
                                            >
                                                Floor 1
                                            </MDBNavbarLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBNavbarLink
                                                style={{ backgroundColor: "#7986CB" }}
                                                active={isActiveTab("/floor2")}
                                                onClick={() => navigate("/floor2")}
                                                href="/floor2"
                                            >
                                                Floor 2
                                            </MDBNavbarLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBBtn
                                    className="px-4 ms-2 me-1"
                                    size="1x"
                                    style={{ backgroundColor: "#90CAF9", fontSize:"15px", color:"#0D47A1"}}
                                    onClick={logout}
                                >
                                    <MDBNavbarLink>Logout</MDBNavbarLink>
                                </MDBBtn>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
