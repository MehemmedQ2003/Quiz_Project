import { Nav, Navbar, Container, Dropdown, Popover, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/image/islamic_quiz_logo.jpg';
import { FaUser } from "react-icons/fa";
import './Navbar.css';
import { useState } from 'react';
const navbars = ['Ana Səhifə', 'Əsmaül Hüsna', 'Təfsir', 'Fiqh', "Hedis"];
const navbarLinks = ['', 'esmaulhusna', 'tefsir', 'fiqh'];


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state

    const userPopover = (
        <Popover id="popover-basic" className='w-100'>
            <Popover.Header as="h3" className='text-center fw-bold fs-5'>Profil</Popover.Header>
            <Popover.Body>
                <Nav className="flex-column">
                    {!isLoggedIn ? (
                        <>
                            <Nav.Item className='text-center my-1'>Əgər qeydiyyatdan keçmisəniz, giriş etmək üçün aşağıdakı butona basın.</Nav.Item>
                            <Nav.Link as={Link} className='btn btn-dark bg-dark text-white my-1 rounded-5' to="/login">Giriş</Nav.Link>
                        </>
                    ) : (
                        <Nav.Link as={Link} className='btn btn-dark bg-dark text-white my-1 rounded-5' to="/logout">Çıxış</Nav.Link>
                    )}
                </Nav>
            </Popover.Body>
        </Popover>
    );
    return (
        <Navbar variant="dark" expand="lg" className='navbar py-2 position-sticky top-0 z-3'>
            <Container className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-5">
                    <img src={logo} alt="logo" className='me-3 border border-white rounded-2' width="50" />
                    <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold'>İslami Test</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Dropdown className='my-2 w-100 px-3'>
                        <Dropdown.Toggle id="dropdown-basic" className='w-100 px-3 fw-bold fs-5'>
                            Səhifələr
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='w-100 border border-white' style={{ backgroundColor: '#0B1B28' }}>
                            {
                                navbars.map((navbar, index) => (
                                    <Dropdown.Item
                                        href={`/${navbarLinks[index]}`}
                                        key={index}
                                        className='dropdown-item text-center fs-5 custom-dropdown-item' style={{ backgroundColor: '#0B1B28', color: 'white' }} 
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'white';
                                            e.target.style.color = '#0B1B28';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#0B1B28';
                                            e.target.style.color = 'white';
                                        }}
                                    >
                                        {navbar}
                                    </Dropdown.Item>

                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav className="ms-autow-100 d-flex gap-4 px-3">
                        <Nav.Link as={Link} to="/register" className="nav-link-register btn btn-white bg-white text-dark rounded-5 shadow-effect px-5">Qeydiyyat</Nav.Link>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={userPopover}>
                            <Nav.Item className='btn btn-white bg-white text-dark rounded-5'>
                                <FaUser />
                            </Nav.Item>
                        </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
