import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Spinner, Card, Col } from 'react-bootstrap';
import questionsData from '../../data/questionsData.json';
import { FaQuran, FaMosque } from 'react-icons/fa';
import { GiStarSwirl } from 'react-icons/gi';

const Aya = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [randomAyah, setRandomAyah] = useState([]);

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

        const randomAyahs = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * questionsData.Quran.length);
            randomAyahs.push(questionsData.Quran[randomIndex]);
        }
        setRandomAyah(randomAyahs);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="grow" role="status" variant="dark">
                    <span className="visually-hidden">Yüklənir...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className="home bg-light position-relative" data-aos="fade-down" data-aos-delay="150">
            <div className="wave-container-top position-absolute top-0 w-100">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>

            <Container className="py-5">
                <h1
                    className="text-center mb-5 fw-bold"
                    style={{ color: "#1E5C93" }}
                    data-aos="zoom-in"
                >
                    <FaQuran className="me-2" />
                    Təsadüfi Quran Ayələri
                </h1>
                <Row className="g-5 py-5">
                    {randomAyah.map((ayah, index) => (
                        <Col
                            key={index}
                            lg={6}
                            md={6}
                            sm={12}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <Card
                                className="shadow border-0 h-100 card-hover"
                                style={{
                                    background: 'linear-gradient(135deg, #e3f2fd, #fff)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'transform 0.5s, box-shadow 0.5s',
                                }}
                            >
                                <Card.Header
                                    className="text-center py-5 position-relative"
                                    style={{
                                        background: 'linear-gradient(135deg, #1E5C93, #4a90e2)',
                                        color: '#fff',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-50px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'rgba(255, 255, 255, 0.2)',
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                            animation: 'bounce 4s infinite',
                                        }}
                                    ></div>
                                    <FaQuran size={50} style={{ zIndex: 1 }} />
                                </Card.Header>
                                <Card.Body className="d-flex align-items-center justify-content-center p-4">
                                    <Card.Text className="text-center fs-5 text-dark">
                                        {ayah.translation}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer
                                    className="text-center py-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #4a90e2, #1E5C93)',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ({ayah.suraNo}/{ayah.suraName}, {ayah.aya})
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>

            <div className="wave-container-bottom position-relative w-100 mt-5 pt-5">
                <div className="wave wave-bottom1"></div>
                <div className="wave wave-bottom2"></div>
                <div className="floating-icons">
                    <FaMosque size={50} className="icon" />
                    <GiStarSwirl size={50} className="icon" />
                </div>
            </div>

            <style>{`
                .wave-container-top .wave {
                    position: absolute;
                    width: 100%;
                    height: 100px;
                    background: linear-gradient(45deg, #1E5C93, #4a90e2);
                    opacity: 0.7;
                    animation: wave-animation 8s infinite linear;
                }
                .wave1 {
                    top: 0;
                    animation-delay: 0s;
                }
                .wave2 {
                    top: 20px;
                    opacity: 0.5;
                    animation-delay: 2s;
                }
                .wave3 {
                    top: 40px;
                    opacity: 0.3;
                    animation-delay: 4s;
                }

                .wave-container-bottom .wave {
                    position: absolute;
                    width: 100%;
                    height: 100px;
                    background: linear-gradient(45deg, #4a90e2, #1E5C93);
                    opacity: 0.6;
                    animation: wave-animation 10s infinite linear;
                }
                .wave-bottom1 {
                    bottom: 0;
                    animation-delay: 0s;
                }
                .wave-bottom2 {
                    bottom: -20px;
                    opacity: 0.4;
                    animation-delay: 3s;
                }

                .floating-icons .icon {
                    position: absolute;
                    bottom: 25px;
                    animation: float 4s infinite ease-in-out;
                }
                .floating-icons .icon:nth-child(1) {
                    left: 20%;
                }
                .floating-icons .icon:nth-child(2) {
                    left: 70%;
                }

                @keyframes wave-animation {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .card-hover:hover {
                    transform: scale(1.1) rotate(1deg);
                    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </div>
    );
};

export default Aya;
