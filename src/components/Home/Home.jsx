// import React from 'react';
import './Home.css';
import logo from '/image/tawhid_flag.jpg';
import { FaHandPaper, FaArrowAltCircleUp } from "react-icons/fa";


const Home = () => {
    return (
        <div className="home">
            <nav className='w-100 container'>        
                <h1 className='text-center fs-2 my-5 d-flex align-items-center justify-content-center flex-column gap-2 slide-in'>
                    Əs Salamun Aleyküm. İslami testə xoş gəlmisiniz. Allah elminizi bərəkətli etsin
                    <FaHandPaper className='hand-icon fs-1' />
                </h1>
                <p className='text-center fs-4 slide-in m-5'>
                    İslami test, İslam dini haqqında biliklərinizi sınamağa imkan verən qısa və maraqlı suallardan ibarətdir. Bu test dini məlumatlarınızı yeniləmək və daha da zənginləşdirmək üçün əla fürsətdir.
                </p>
                <p className='slide-in text-center my-5 fs-1 d-flex align-items-center justify-content-center flex-column gap-4'>
                    Testə başlamaq üçün yuxarıdakı linklərdən istifadə edin
                    <FaArrowAltCircleUp className='text-primary fs-1'/>
                </p>
                <img src={logo} alt="logo" width="100%" className='slide-in' />
            </nav>
        </div>
    );
};

export default Home;
