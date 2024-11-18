import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { FaPray } from 'react-icons/fa';
import BannerImg from '/public/image/Banner2.jpg'
import ArabicImg from '/public/image/arabic.png'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import questionsData from '../../data/questionsData.json';

const Dua = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [randomDua, setRandomDUa] = useState(null);
    
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

        const randomIndex = Math.floor(Math.random() * questionsData.duas.length);
        setRandomDUa(questionsData.duas[randomIndex]);

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
        <Container className="my-5">
            <Row className="justify-content-center my-5" data-aos="fade-down">
                <Col md={12}>
                    <Card className="text-center shadow-lg border-0 rounded-3">
                        <p className='text-center fs-4 fw-bold mt-4 px-3' style={{color: "#0b1b28"}}>Allah... O’ndan başka (ibadeti hak eden) hiçbir ilah yoktur. En güzel isimler O’na aittir. <br></br> (20/Tâhâ, 8)</p>
                        <div style={{backgroundImage: `url(${BannerImg})`, position: "relative", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "500px"}}>
                            <img src={ArabicImg} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                        </div>
                        {
                            randomDua && (
                                <Card className="p-4 shadow-lg border-0 rounded-3" style={{ backgroundColor: '#f8f9fa', transition: 'transform 0.7s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                                    <Card.Title className="d-flex align-items-center justify-content-center display-4 text-primary fw-semibold mb-3 px-4">
                                    <FaPray className="me-2" /> {randomDua.name}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 fs-2 text-muted px-4">
                                        {randomDua.nameMeaning}
                                    </Card.Subtitle>
                                    <Card.Text className="text-secondary mb-4 px-2 fs-5">
                                        {randomDua.dua}
                                    </Card.Text>
                                </Card>
                            )
                        }
                    </Card>
                </Col>
            </Row>
        </Container>
);
};

export default Dua;
