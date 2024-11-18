import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import questionsData from '../../data/questionsData.json';
import { Card, Container, Spinner, Row, Col, Badge } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Categories = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

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
        <Container className="categories py-5">
            <Container>
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-center fs-1 mb-5 fw-bold" style={{ color: '#1E5C93' }}>Mövzular</h1>
                </motion.div>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {Object.keys(questionsData.questions).map((categoryKey, index) => {
                        const categoryData = questionsData.questions[categoryKey];
                        const length = categoryData.questions.length;
                        return (
                            <Col key={index}>
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                    <Card className="h-100 shadow border-0 rounded-lg overflow-hidden">
                                        <div style={{ position: 'relative' }}>
                                            <Card.Img variant="top" src={categoryData.img} style={{ height: '200px', objectFit: 'cover' }} />
                                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
                                        </div>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className='text-center mb-3 fw-bold'>{categoryData.category} sualları</Card.Title>
                                            <Badge className="align-self-center mb-3" style={{ backgroundColor: '#1E5C93', fontSize: "16px" }}>
                                                {length} sual
                                            </Badge>
                                            <Link
                                                to={`/questions/${categoryData.link}`}
                                                className='btn mt-auto fw-bold text-white d-flex align-items-center justify-content-center gap-2'
                                                style={{ backgroundColor: '#1E5C93', transition: 'all 0.3s' }}
                                            >
                                                <FaBookOpen />
                                                Testə başla
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default Categories
