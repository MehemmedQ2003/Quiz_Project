import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { FaQuran, FaMosque, FaStar, FaChevronDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const aboutData = [
    {
        icon: FaQuran,
        title: "Misyonumuz",
        content: "Allah'ın (cc) izniyle bu testin sizler için faydalı olacağını ve sizi bilgilendireceğini umuyoruz. Allah (cc) ilminize bereket versin.",
        color: "primary"
    },
    {
        icon: FaMosque,
        title: "Görev",
        content: "Allah'ın (cc) izniyle bu testlere yeni sorular ekleyeceğiz ve bu sorularla kendinizi test edebilirsiniz.",
        color: "success"
    },
    {
        icon: FaStar,
        title: "Haberler",
        content: "Sizler Allah'ın (cc) izniyle hem ayetleri, hem de Allah'ın (cc) isim ve sıfatlarını (onlar hakkında bilgileri ve o isimlerle duaları göreceksiniz).",
        color: "warning"
    }
];

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    
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
        <div className="about-wrapper">
            <section className="hero-section d-flex align-items-center justify-content-center text-center">
                <Container>
                    <h1 className="arabic-font mb-4" data-aos="fade-down">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                    <h2 className="mb-4 fs-1" data-aos="fade-up" data-aos-delay="200">Hakkımızda</h2>
                    <p className="lead fs-1" data-aos="fade-up" data-aos-delay="400">
                        İslami Test, İslam dini hakkındaki bilginizi artırmak ve test etmek için tasarlanmış bir test sitesidir.
                    </p>
                    <FaChevronDown className="scroll-icon" data-aos="fade" data-aos-delay="800" />
                    
                </Container>
            </section>

            <Container className="content-section py-5">
                <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                        <Card className="shadow-lg border-0 overflow-hidden" data-aos="zoom-in">
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    {aboutData.map((item, index) => (
                                        <Col md={4} key={index} className="p-4 border-end">
                                            <div className="text-center mb-4" data-aos="fade-up" data-aos-delay={200 * (index + 1)}>
                                                <item.icon size={60} className={`text-${item.color} mb-3`} />
                                                <h4 className="font-weight-bold">{item.title}</h4>
                                                <p className="text-muted">{item.content}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                        <div className="text-center mt-5 p-4 rounded quote-section" data-aos="fade-up" data-aos-delay="800">
                            <p className="mb-0 font-weight-bold">
                                Allah’tan başka hiçbir ilah olmadığına (ibadeti/kulluğu hak edenin yalnızca Allah olduğuna), Allah, melekler ve adaleti ayakta tutan ilim adamları şahitlik etti. O’ndan başka ilah yoktur. O, (izzet sahibi, her şeyi mağlup eden) El-Azîz, (hüküm ve hikmet sahibi olan) El-Hakîm’dir.
                                <br/>
                                <b>(3/Ali İmran, 18)</b>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
