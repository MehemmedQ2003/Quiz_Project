import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bgİmage from '/image/bg_img.jpg';
import { FaRegUserCircle, FaLock, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import './Register.css';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            setError('Bütün xanaları doldurun');
        } else {
            setError('');
            console.log('Register attempt with:', { firstName, lastName, email, password });
        }
    };

    return (
        <div style={{ backgroundImage: `url(${Bgİmage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} className='py-4'>
            <Container>
                <Row>
                    <Col lg={12} className='d-flex align-items-center justify-content-start mb-3'>
                        <div className='px-5 rounded-4'>
                            <Link to="/" className="text-white text-decoration-none fs-3 fw-bold">Ana Səhifə</Link>
                        </div>
                    </Col>
                    <Col lg={12} className='d-flex align-items-center justify-content-center'>
                        <div className='bg-secondary px-5 py-3 rounded-4'>
                            <div className="d-flex align-items-center justify-content-center mb-4 text-white px-5">
                                <FaRegUserCircle className='fs-1 me-2' />
                                <h4 className='mb-0 fs-1'>Qeydiyyat</h4>
                            </div>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="formBasicFirstName">
                                    <Form.Label className='text-white'>
                                        Adınız
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <FaUser />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Adınız"
                                            aria-label="Adınız"
                                            aria-describedby="basic-addon1"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            type="text"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicLastName">
                                    <Form.Label className='text-white'>
                                        Soyadınız
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <MdDriveFileRenameOutline />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Soyadınız"
                                            aria-label="Soyadınız"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className='text-white'>
                                        Email
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <IoMail />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                            type="email"
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
                                <p className="text-center text-white mt-3 d-flex align-items-center justify-content-center gap-2">
                                    <Form.Check
                                        type="checkbox"
                                        id="terms-checkbox"
                                    />
                                    <b style={{ color: '#0B1B28' }}>Mən şərtlərlə razıyam</b>
                                    {/* <Link to="/" className='text-decoration-none fw-bold' style={{ color: '#0B1B28' }}>Mən şərtlərlə razıyam</Link> */}
                                </p>
                                <Button variant="primary" type="submit" className="w-100 my-2">
                                    Qeydiyyatdan keç
                                </Button>
                            </Form>
                            <p className="d-flex align-items-center justify-content-center gap-2 text-center text-white mt-3">
                                Artıq hesabınız var?
                                <Link to="/login" className="text-decoration-none fw-bold" style={{ color: '#0B1B28' }}>Giriş</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;
