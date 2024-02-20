import { useState } from "react";
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

export default function Navbar() {
    const [openNavRight, setOpenNavRight] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                                    active={activeTab === "home"}
                                    onClick={() => handleTabClick("home")}
                                    href="/"
                                >
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active={activeTab === "dashboard"}
                                    onClick={() => handleTabClick("dashboard")}
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
                                                active={activeTab === "floor0"}
                                                onClick={() => handleTabClick("floor0")}
                                                href="/floor0"
                                            >
                                                Floor 0
                                            </MDBNavbarLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBNavbarLink
                                                style={{ backgroundColor: "#7986CB" }}
                                                active={activeTab === "floor1"}
                                                onClick={() => handleTabClick("floor1")}
                                                href="/floor1"
                                            >
                                                Floor 1
                                            </MDBNavbarLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBNavbarLink
                                                style={{ backgroundColor: "#7986CB" }}
                                                active={activeTab === "floor2"}
                                                onClick={() => handleTabClick("floor2")}
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

                                    style={{ backgroundColor: "#9FA8DA" }}
                                    onClick={handleOpen}
                                >
                                    <MDBNavbarLink>Login</MDBNavbarLink>
                                </MDBBtn>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
