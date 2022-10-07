import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";

export default function App() {
  return (
      <Router>

        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
        }
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

        <Footer/>

      </Router>
  )
}

class Home extends React.Component {
  render() {
    return <h1 className="text-center">test</h1>
  }
}

