import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bgİmage from '/image/bg_img.jpg';
import { FaRegUserCircle, FaLock, FaUser } from "react-icons/fa";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Bütün xanaları doldurun');
        } else {
            setError('');
            console.log('Login attempt with:', { email, password });
        }
    };

    return (
        <div style={{ backgroundImage: `url(${Bgİmage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} className='py-5'>
            <Container>
                <Row>
                    <Col lg={12} className='d-flex align-items-center justify-content-end'>
                        <div className='py-2 px-5 rounded-4'>
                            <Link to="/" className="text-white text-decoration-none fs-3 fw-bold">Ana Səhifə</Link>
                        </div>
                    </Col>
                    <Col lg={12} className='py-4 d-flex align-items-center justify-content-center'>
                        <div className='bg-secondary px-5 py-4 rounded-4'>
                            <div className="d-flex align-items-center justify-content-center mb-4 text-white">
                                <FaRegUserCircle className='fs-1 me-2' />
                                <h4 className='mb-0 fs-1'>Daxil ol</h4>
                            </div>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className='text-white'>
                                        Email ünvanı
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <FaUser />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label className='text-white'>
                                        Şifrə
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <FaLock />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Şifrə"
                                            aria-label="Şifrə"
                                            aria-describedby="basic-addon1"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="my-2" controlId="formBasicRememberMe">
                                    <Form.Check 
                                        type="checkbox"
                                        label="Məni xatırla"
                                        className="text-white"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 my-2">
                                    Daxil ol
                                </Button>
                            </Form>
                            <p className="text-center text-white mt-3">
                                Hesabınız yoxdur? <Link to="/register" className='text-decoration-none fw-bold' style={{ color: '#0B1B28' }}>Qeydiyyatdan keçin</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
