import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
    return (
        <Router>
            <div>
                <nav style={navStyle}>
                    <Link to="/">Home</Link>
                    <Link to="/page1">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </div>
        </Router>
    );
}

const navStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "white",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    gap: "10px",
};

ReactDOM.render(<App />, document.getElementById("root"));
