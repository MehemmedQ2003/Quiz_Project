import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./layout/footer/Footer";
import NavBar from "./layout/navbar/Navbar";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import About from "./components/About/About";
import Dua from "./components/Dua/Dua";
import Questions from "./components/Questions/Questions";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Aya from "./components/Aya/Aya";

function App() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="grow" role="status" variant='dark'>
                <span className="visually-hidden">Yükleniyor...</span>
            </Spinner>
        </div>;
    }

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/aya" element={<Aya />} />
                <Route path="/dua" element={<Dua />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/questions/:category" element={<QuestionsPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
