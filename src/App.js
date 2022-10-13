import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Page from "./Components/Page";
import "./App.css";

export default function App() {
    return (<Router>

            <Header/>

            <Routes>
                <Route path="Mobile-Application-Modeling/" element={<Home/>}/>
                <Route path="Mobile-Application-Modeling/:page" element={<Page/>}/>
            </Routes>

            <Footer/>

        </Router>)
}
