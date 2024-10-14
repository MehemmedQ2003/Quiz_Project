import { useEffect } from 'react';
import AOS from 'aos';
import './Home.css';
import logo from '/image/tawhid_flag.jpg';
import { FaHandPaper, FaArrowAltCircleUp } from "react-icons/fa";


const Home = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);
    return (
        <div className="home" data-aos="fade-up" data-aos-delay="150">
            <nav className='w-100 container'>        
                <h1 className='text-center fs-2 my-5 d-flex align-items-center justify-content-center flex-column gap-2'>
                    Əs Salamun Aleyküm. İslami testə xoş gəlmisiniz. Allah elminizi bərəkətli etsin
                    <FaHandPaper className='hand-icon fs-1' />
                </h1>
                <p className='text-center fs-4 m-5'>
                    İslami test, İslam dini haqqında biliklərinizi sınamağa imkan verən qısa və maraqlı suallardan ibarətdir. Bu test dini məlumatlarınızı yeniləmək və daha da zənginləşdirmək üçün əla fürsətdir.
                </p>
                <p className=' text-center my-5 fs-1 d-flex align-items-center justify-content-center flex-column gap-4'>
                    Testə başlamaq üçün yuxarıdakı linklərdən istifadə edin
                    <FaArrowAltCircleUp className='text-primary fs-1'/>
                </p>
                <img src={logo} alt="logo" width="100%" className='' />
            </nav>
        </div>
    );
};

export default Home;
