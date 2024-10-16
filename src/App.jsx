import "./App.css";
import EsmaulHusna from "./components/EsmaulHusna/EsmaulHusna";
import { Routes, Route, useLocation } from "react-router-dom";
import Tefsir from "./components/Tefsir/Tefsir";
import Home from "./components/Home/Home";
import Footer from "./layout/footer/Footer";
import NavBar from "./layout/navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Fiqh from "./components/Fiqh/Fiqh";



function App() {
    const location = useLocation();
    const isAuthPage =
        location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            {!isAuthPage && <NavBar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/esmaulhusna" element={<EsmaulHusna />} />
                <Route path="/esmaulhusna/easy" element={<EsmaulHusna difficulty="easy" />} />
                <Route path="/esmaulhusna/normal" element={<EsmaulHusna difficulty="normal" />} />
                <Route path="/esmaulhusna/hard" element={<EsmaulHusna difficulty="hard" />} />
                
                <Route path="/tefsir" element={<Tefsir />} />
                <Route path="/tefsir/easy" element={<Tefsir difficulty="easy" />} />
                <Route path="/tefsir/normal" element={<Tefsir difficulty="normal" />} />
                <Route path="/tefsir/hard" element={<Tefsir difficulty="hard" />} />

                <Route path="/fiqh" element={<Fiqh />} />
                <Route path="/fiqh/easy" element={<Fiqh difficulty="easy" />} />
                <Route path="/fiqh/normal" element={<Fiqh difficulty="normal" />} />
                <Route path="/fiqh/hard" element={<Fiqh difficulty="hard" />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </>
    );
}

export default App;
