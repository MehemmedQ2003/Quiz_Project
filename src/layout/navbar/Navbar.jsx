import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '/image/islamic_quiz_logo.jpg';
import { FaBars } from "react-icons/fa";
import './Navbar.css';


const NavBar = () => {
    const location = useLocation();
    return (
        <Navbar expand="lg" className='navbar py-2 position-sticky top-0 z-3 bg-gradient'>
            <Container fluid="md">
                <Navbar.Brand as={Link} to="/" className='d-flex align-items-center w-75'>
                    <img src={logo} alt="logo" className='rounded-circle' style={{ width: '40px', height: '40px' }} />
                    <span className="ms-2 fw-bold text-white d-none d-sm-inline">İslami Test</span>
                </Navbar.Brand>
                <div className="d-flex align-items-center order-lg-last">
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FaBars className="text-white" />
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {['/', '/about', "/aya", '/dua', '/questions', '/contact'].map((path) => (
                            <Nav.Link
                                key={path}
                                as={Link}
                                to={path}
                                className={`nav-link fs-5 mx-2 my-2 my-lg-0 ${location.pathname === path ? 'active-link text-warning fw-bold' : 'text-white'}`}
                            >
                                {path === '/' ? 'Anasayfa' :
                                    path === '/about' ? 'Hakkımızda' :
                                        path === '/aya' ? 'Ayet' :
                                            path === '/dua' ? 'Dua' :
                                                path === '/questions' ? 'Testler' : 'İletişim'}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
