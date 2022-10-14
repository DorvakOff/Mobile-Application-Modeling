import React from "react";

export default function App() {
    return (
        <>
            <div className="container">
                <h1 className="text-center m-5">Mobile Modeling 2022</h1>
                <div className="row">
                    <div className="col-12 m-5">
                        <div>
                            <h2>Bienvenue sur le site de Mobile Modeling 2022</h2>
                            <br/>
                            <p>Réalisé par l'équipe jaune :</p>
                            <div className="row">
                                <div className="col-3">
                                    <ul>
                                        <li>Kévin Véronési</li>
                                        <li>Noémie Tandol</li>
                                        <li>Matéo Papaix</li>
                                        <li>Fabien Bertato</li>
                                        <li>Titouan Foras</li>
                                        <li>Anthony Delbouis</li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li>Noémie Rappeneau</li>
                                        <li>Vincent Guillou</li>
                                        <li>Camille Durand</li>
                                        <li>Julien Devienne-Ousmer</li>
                                        <li>Théo Villeneuve</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a href="https://github.com/DorvakOff/Mobile-Application-Modeling" target="_blank"
                                   rel="noreferrer"
                                    className="btn btn-primary">Contribuer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}