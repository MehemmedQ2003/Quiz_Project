// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/image/logo.jpg';  // Update this line

const navbars = ['Əsmaül Hüsna', 'Təfsir', 'Fiqh'];

const Footer = () => {
    return (
        <footer className="bg-primary text-light mt-5">
            <Container>
                <Row>
                    <Col md={4} className='my-3' >
                        <h5>Haqqımızda</h5>
                        <img src={logo} alt="logo" width="100" height="100" />
                    </Col>
                    <Col md={4} className='my-3' >
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled ">
                            {
                                navbars.map((navbar, index) => (
                                    <li key={index}><a className="text-decoration-none text-white    fs-4" href={`#${navbar}`}>{navbar}</a></li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col md={4} className='my-3' >
                        <h5>Bizimlə Əlaqə</h5>
                        <p>Email: mehemmed.qardasov2003@gmail.com</p>
                        <p>Phone: +994 55 713 52 90</p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Allah&apos;s Names Quiz. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;