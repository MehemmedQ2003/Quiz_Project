import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/image/logo.jpg';

const navbars = ['Ana Səhifə', 'Əsmaül Hüsna', 'Təfsir', 'Fiqh'];
const navbarLinks = ['', 'esmaulhusna', 'tefsir', 'fiqh'];

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <footer className="bg-primary text-light mt-5" data-aos="fade-up">
            <Container>
                <Row>
                    <Col md={4} className='my-3' data-aos="fade-right">
                        <h5 className='text-decoration-underline fs-3 text-dark'>Haqqımızda</h5>
                        <img src={logo} alt="logo" width="100" height="100" />
                    </Col>
                    <Col md={4} className='my-3'>
                        <h5 className='text-decoration-underline fs-3 text-dark'>İstifadəçi linkləri</h5>
                        <ul className="list-unstyled">
                            {
                                navbars.map((navbar, index) => (
                                    <li key={index}>
                                        <a className="text-decoration-none text-white fs-4" href={`/${navbarLinks[index]}`}>
                                            {navbar}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col md={4} className='my-3' data-aos="fade-left">
                        <h5 className='text-decoration-underline fs-3 text-dark'>Bizimlə Əlaqə</h5>
                        <p className='fs-4 fw-bold'>Email: <a href="mailto:mehemmed.qardasov2003@gmail.com" className="fw-normal text-white text-decoration-none">mehemmed.qardasov2003@gmail.com</a></p>
                        <p className='fs-4 fw-bold'>Phone: <a href="tel:+994557135290" className="fw-normal text-white text-decoration-none">+994 55 713 52 90</a></p>
                    </Col>
                </Row>
                <Row className="mt-3" data-aos="zoom-in">
                    <Col className="text-center">
                        <p className='fs-5 fw-bold text-dark'>
                            &copy; {new Date().getFullYear()} İslami Test. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
