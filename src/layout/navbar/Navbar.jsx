import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/image/islamic_quiz_logo.jpg';
import './Navbar.css';

const navbars = ['Ana Səhifə', 'Əsmaül Hüsna', 'Təfsir', 'Fiqh'];
const navbarLinks = ['', 'esmaulhusna', 'tefsir', 'fiqh'];

const NavBar = () => {
    return (
        <Navbar variant="dark" expand="lg" className='navbar py-2 position-sticky top-0 z-3'>
            <Container className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-5">
                    <img src={logo} alt="logo" className='me-3 border border-white rounded-2' width="50" />
                    <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold'>İslami Test</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navbars.map((navbar, index) => (
                                <Nav.Link
                                    as={Link} 
                                    to={`/${navbarLinks[index]}`} 
                                    className='text-white fs-5 fw-bold mx-2' 
                                    key={index}
                                >
                                    {navbar}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;