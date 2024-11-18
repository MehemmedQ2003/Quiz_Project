import { Nav, Navbar, Container, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '/image/islamic_quiz_logo.jpg';
import { FaUser, FaBars } from "react-icons/fa";
import { useState } from 'react';
import './Navbar.css';


const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    const userPopover = (
        <Popover id="popover-basic" className='w-100'>
            <Popover.Header as="h3" className='text-center fw-bold fs-5'>Profil</Popover.Header>
            <Popover.Body>
                <Nav className="flex-column">
                    {!isLoggedIn ? (
                        <>
                            <Nav.Item className='text-center my-1'>Kayıtlıysanız giriş yapmak için aşağıdaki butona tıklayın.</Nav.Item>
                            <Nav.Link as={Link} className='btn btn-dark bg-dark text-white my-1 rounded-5' to="/login">Giriş Yap</Nav.Link>
                        </>
                    ) : (
                        <Nav.Link as={Link} className='btn btn-dark bg-dark text-white my-1 rounded-5' to="/logout">Çıkış Yap</Nav.Link>
                    )}
                </Nav>
            </Popover.Body>
        </Popover>
    );
    return (
        <Navbar expand="lg" className='navbar py-2 position-sticky top-0 z-3 bg-gradient'>
            <Container fluid="md">
                <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
                    <img src={logo} alt="logo" className='rounded-circle' style={{ width: '40px', height: '40px' }} />
                    <span className="ms-2 fw-bold text-white d-none d-sm-inline">İslami Test</span>
                </Navbar.Brand>
                <div className="d-flex align-items-center order-lg-last">
                    <Nav.Link as={Link} to="/register" className="btn btn-white text-dark bg-white rounded-pill px-5 py-1 me-2 d-none d-sm-block">Kayıt</Nav.Link>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={userPopover}>
                        <Button variant="light" className="rounded-circle px-2 py-1 me-2">
                            <FaUser className='text-dark mb-1' />
                        </Button>
                    </OverlayTrigger>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FaBars className="text-white" />
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {['/', '/about', '/dua', '/questions', '/contact'].map((path) => (
                            <Nav.Link 
                                key={path}
                                as={Link} 
                                to={path} 
                                className={`nav-link fs-5 mx-2 my-2 my-lg-0 ${location.pathname === path ? 'active-link text-warning fw-bold' : 'text-white'}`}
                            >
                                {path === '/' ? 'Anasayfa' : 
                                 path === '/about' ? 'Hakkımızda' : 
                                 path === '/questions' ? 'Testler' : 
                                 path === '/contact' ? 'İletişim' : 'Dua'}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav.Link as={Link} to="/register" className="btn btn-white text-dark bg-white rounded-pill px-3 py-2 my-2 d-sm-none">Kayıt</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
