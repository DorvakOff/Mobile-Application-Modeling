import React, {useCallback, useState} from "react";
import ReactMarkdown from "react-markdown";

export default function Page() {

    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);

    const loadPage = useCallback(() => {
        const page = window.location.hash.replace("#/", "");
        console.log(page)
        try {
            setFile(require(`../content/pages/${page}.md`));
            console.log(file)
            if(file) {
                fetch(file)
                    .then(res => res.text())
                    .then(text => setContent(text));
            } else {
                setContent(null)
            }
        } catch (e) {
            setFile(null)
            setContent(null)
        }

    }, [file]);

    React.useEffect(() => {
        loadPage();
        window.addEventListener('hashchange', () => {
            loadPage();
        });
    }, [loadPage]);

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12 m-5">
                    <div className="card">
                        <div className="card-body">
                            {file === null && (<div className="container">
                                <h1>Page introuvable</h1>
                                <p>La page que vous recherchez n'existe pas.</p>
                            </div>)}
                            {file && content && (<ReactMarkdown>{content}</ReactMarkdown>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)

}