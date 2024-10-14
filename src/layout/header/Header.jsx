// import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import logo from '/image/navbar_logo.jpg';

const Header = () => {
    return (
        <header className="my-2">
            <Container>
                <Row className="align-items-center">
                    {/* <Col className='text-center mb-3 mb-md-0' md={12}>
                        <img src={logo} alt="İslami Test Logo" width="800" height="80" className="img-fluid" />
                    </Col> */}
                </Row>
            </Container>
        </header>
    );
};

export default Header;
