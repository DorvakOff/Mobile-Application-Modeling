import React from "react";

import logo from './logo.png';

export default function App() {
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-5">Mobile Modeling 2022</h1>
                <div>
                    <div className="pb-5">
                        <div>
                            <h2 className="text-center">Bienvenue sur le site de Mobile Modeling 2022</h2>
                            <p className="text-center"> Site du cours de modélisation des applications mobiles de la LP
                                APSIO 2011-2022. </p>
                            <br/>
                            <div className="row m-lg-5">
                                <div className="col-md-6">
                                    <p>Réalisé par l'équipe jaune :</p>
                                    <ul>
                                        <li>Kévin Véronési</li>
                                        <li>Noémie Tandol</li>
                                        <li>Matéo Papaix</li>
                                        <li>Fabien Bertato</li>
                                        <li>Titouan Foras</li>
                                        <li>Anthony Delbouis</li>
                                        <li>Noémie Rappeneau</li>
                                        <li>Vincent Guillou</li>
                                        <li>Camille Durand</li>
                                        <li>Julien Devienne-Ousmer</li>
                                        <li>Théo Villeneuve</li>
                                    </ul>
                                    <div className="mt-4">
                                        <a href="https://github.com/DorvakOff/Mobile-Application-Modeling" target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-warning">Contribuer</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={logo} alt="Logo" className="img-fluid"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}