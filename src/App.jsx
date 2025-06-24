import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import Contacto from "./Pages/Contacto.jsx";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
