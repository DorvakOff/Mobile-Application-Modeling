import React from "react";
import ReactMarkdown from "react-markdown";

export default function Page() {

    // Récupérer le nom de la page
    const page = window.location.pathname.replace("/", "");

    // Récupérer le contenu de la page
    let file = null
    try {
        file = require(`../content/pages/${page}.md`);
    } catch (e) {
        console.log(e);
    }

    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        fetch(file)
            .then(res => res.text())
            .then(text => setContent(text));
    }, [file]);

    // si pas de fichier, on affiche une page d'erreur
    if (!file) {
        return (
            <div className="container">
                <h1>Page introuvable</h1>
                <p>La page que vous recherchez n'existe pas.</p>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 m-5">
                        <div className="card">
                            <div className="card-body">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}