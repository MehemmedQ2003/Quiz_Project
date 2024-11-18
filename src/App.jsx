import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./layout/footer/Footer";
import NavBar from "./layout/navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage";
import About from "./components/About/About";
import Dua from "./components/Dua/Dua";
import Questions from "./components/Questions/Questions";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function App() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const isAuthPage =
        location.pathname === "/login" || location.pathname === "/register";

        
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
            {!isAuthPage && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/questions/:category" element={<QuestionsPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/dua" element={<Dua />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    );
}

export default App;
