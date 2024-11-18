import { useEffect, useState } from 'react';
import AOS from 'aos';
import './Home.css';
import { Container, Spinner, Card, Row, Col, Button } from 'react-bootstrap';
import questionsData from '../../data/questionsData.json';
import ImgLogo from '/public/image/tawhid_flag.jpg'
import { FaQuran, FaBookOpen, FaQuestionCircle, FaUserGraduate } from 'react-icons/fa';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [randomAyah, setRandomAyah] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const randomIndex = Math.floor(Math.random() * questionsData.Quran.length);
        setRandomAyah(questionsData.Quran[randomIndex]);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="grow" role="status" variant='dark'>
                    <span className="visually-hidden">Yükleniyor...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className="home bg-gradient" data-aos="fade-down" data-aos-delay="150">
            <Container className="py-5">
                <Row className="align-items-center mb-5">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <h1 className="display-3 fw-bold text-white mb-3 rounded-3 animated-title text-center" >Selamün Aleyküm</h1>
                        <Button size="lg" className="pulse-button rainbow-bg w-100 d-flex justify-content-center align-items-center">
                            <FaQuestionCircle className="me-2" />
                            İslami teste hoş geldiniz. Allah bilginizi bereketli etsin
                        </Button>
                    </Col>
                    <Col lg={6}>
                        <div className="image-container floating">
                            <img src={ImgLogo} alt="Tawhid Flag" className="img-fluid rounded-3 shadow-lg hover-effect" />
                        </div>
                    </Col>
                </Row>

                {randomAyah && (
                    <Card className="random-prayer my-5 shadow-lg border-0 rounded-3 overflow-hidden rainbow-border" style={{ background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)' }}>
                        <Card.Header className="text-white py-3 rounded-top" style={{ backgroundColor: "#1E5C93" }}>
                            <h2 className="mb-0 text-center">
                                <FaQuran className="me-2" />
                                Ayet
                            </h2>
                        </Card.Header>
                        <Card.Body className="p-4 bg-white rounded-bottom">
                            <Card.Title className="arabic-text text-center mb-4 display-6 fw-bold text-primary">
                                {randomAyah.arabic_text}
                            </Card.Title>
                            <Card.Text className="text-center fs-5 mb-3 fw-bold text-secondary">
                                ({randomAyah.suraNo}/{randomAyah.suraName}, {randomAyah.aya})
                            </Card.Text>
                            <Card.Text className="text-center fs-5 text-muted">
                                {randomAyah.translation}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}

                <Row className="mt-5 text-center feature-row">
                    <Col md={4} className="mb-4">
                        <div className="feature-card bouncing">
                            <div className="feature-icon text-white rounded-circle mb-3">
                                <FaBookOpen className="bi" />
                            </div>
                            <h3 className="fw-bold">Öğren</h3>
                            <p className="text-muted">İslam hakkında daha fazla bilgi edinin.</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <div className="feature-card bouncing">
                            <div className="feature-icon text-white rounded-circle mb-3">
                                <FaQuestionCircle className="bi" />
                            </div>
                            <h3 className="fw-bold">Test Et</h3>
                            <p className="text-muted">Bilgilerinizi ilginç testlerle kontrol edin.</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4">
                        <div className="feature-card bouncing">
                            <div className="feature-icon text-white rounded-circle mb-3">
                                <FaUserGraduate className="bi" />
                            </div>
                            <h3 className="fw-bold">Geliş</h3>
                            <p className="text-muted">Manevi ve bilimsel olarak gelişin.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
