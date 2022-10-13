import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

export default function App() {
    return (
        <>
            {/* Header */}
            <Navbar bg="dark" variant="dark" expand="lg"    >
                <Container>
                    <Navbar.Brand href="/Mobile-Application-Modeling">Team jaune</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Mobile-Application-Modeling/Concepts">Concepts</Nav.Link>
                            <Nav.Link href="/Mobile-Application-Modeling/Outils">Outils</Nav.Link>
                            <Nav.Link href="/Mobile-Application-Modeling/Plateformes">Plateformes</Nav.Link>
                            <Nav.Link href="/Mobile-Application-Modeling/IOS-Android">IOS-Android</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}