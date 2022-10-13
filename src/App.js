import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Page from "./Components/Page";
import "./App.css";

export default function App() {

    let path;

    useEffect(() => {
        path = localStorage.getItem('path');
        if(path) {
            localStorage.removeItem('path');
        }
    }, [path])

    return (path ? <Navigate replace to={path} /> : <Router>

            <Header/>

            <Routes>
                <Route path="Mobile-Application-Modeling/" element={<Home/>}/>
                <Route path="Mobile-Application-Modeling/:page" element={<Page/>}/>
            </Routes>

            <Footer/>

        </Router>)
}
