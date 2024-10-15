import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '/image/islamic_quiz_logo.jpg';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa6';


const navbars = ['Ana Səhifə', 'Əsmaül Hüsna', 'Təfsir', 'Fiqh'];
const navbarLinks = ['', 'esmaulhusna', 'tefsir', 'fiqh'];
const socialMedia = [
    {
        icon: FaInstagram,
        color: '#E1306C',
        link: 'https://www.instagram.com/islamic_quiz/'
    },
    {
        icon: FaFacebook,
        color: '#1877F2',
        link: 'https://www.facebook.com/islamic_quiz/'
    },
    {
        icon: FaTwitter,
        color: '#1DA1F2 ',
        link: 'https://www.twitter.com/islamic_quiz/'
    },
    {
        icon: FaYoutube,
        color: '#FF0000',
        link: 'https://www.youtube.com/islamic_quiz/'
    },
    {
        icon: FaLinkedin,
        color: '#0077B5',
        link: 'https://www.linkedin.com/islamic_quiz/'
    },
    {
        icon: FaGithub,
        color: 'white',
        link: 'https://www.tiktok.com/islamic_quiz/'
    }
];


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
        <footer className="text-light mt-5" data-aos="fade-up">
            <Container>
                <Row>
                    <Col lg={3} md={6} className='my-3 text-center' data-aos="fade-up">
                        <h5 className='text-decoration-underline mb-3 fs-3'>Test ikonumuz</h5>
                        <img src={logo} alt="logo" className='border border-white rounded-4' width="100" height="100" />
                    </Col>
                    <Col lg={3} md={6} className='my-3' data-aos="fade-up">
                        <h5 className='text-decoration-underline fs-3 text-center'>İstifadəçi linkləri</h5>
                        <ul className="list-unstyled text-center">
                            {
                                navbars.map((navbar, index) => (
                                    <li key={index}>
                                        <a className="text-decoration-none text-white" href={`/${navbarLinks[index]}`}>
                                            {navbar}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className='my-3' data-aos="fade-up">
                        <h5 className='text-decoration-underline fs-3 text-center'>Bizimlə Əlaqə</h5>
                        <p className='fw-bold text-center'>Email: <a href="mailto:mehemmed.qardasov2003@gmail.com" className="fw-normal text-white text-decoration-none">mehemmed.qardasov2003@gmail.com</a></p>
                        <p className='fw-bold text-center'>Phone: <a href="tel:+994557135290" className="fw-normal text-white text-decoration-none">+994 55 713 52 90</a></p>
                    </Col>
                    <Col lg={3} md={6} className='my-3' data-aos="fade-up">
                        <h5 className='text-decoration-underline fs-3 text-center'>Sosial Şəbəkələrimiz</h5>
                        <ul className="list-unstyled text-center d-flex align-items-center justify-content-center gap-3">
                            <div className='container'>
                                <div className='row px-4'>
                                    {
                                        socialMedia.map((social, index) => (
                                            <Col lg={3} md={6} sm={3} xs={6} key={index}>
                                                <li className='fs-2'>
                                                    <a className="text-decoration-none " href={social.link} style={{ color: social.color }}>
                                                        <social.icon />
                                                    </a>
                                                </li>
                                            </Col>
                                        ))
                                    }
                                </div>
                            </div>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3" data-aos="fade-up">
                    <Col lg={12} className="text-center">
                        <p className='fw-bold mt-4 text-white'>
                            &copy; {new Date().getFullYear()} İslami Test. Bütün hüquqlar qorunur.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
