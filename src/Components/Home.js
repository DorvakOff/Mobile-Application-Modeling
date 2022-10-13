import React from "react";

export default function App() {
    return (
        <>
            <div className="container">
                <h1 className="text-center m-5">Mobile Modeling 2022</h1>
                <div className="row">
                    <div className="col-12 p-5">
                        <div>
                            <h2 className="text-center">Bienvenue sur le site de Mobile Modeling 2022</h2>
                            <p className="text-center"> Site du cours de modélisation des applications mobiles de la LP
                                APSIO 2011 -2022. </p>
                            <br/>
                            <p>Réalisé par l'équipe jaune :</p>
                            <div className="row">
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
                                    <div className="col-4">
                                        <ul>
                                            <li>Noémie Rappeneau</li>
                                            <li>Vincent Guillou</li>
                                            <li>Camille Durand</li>
                                            <li>Julien Devienne-Ousmer</li>
                                            <li>Théo Villeneuve</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                    {/*    charger une image de test */}
                                        <img src="https://upload.wikimedia.org/wikipedia/fr/8/8a/Logo_IUT_Blagnac.png" alt={"logo IUT Blagnac"} className="img-fluid"/>
                                    </div>
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