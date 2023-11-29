import Home from "./PageHome";
import News from "./PageNew";
import Contact from "./PageContact";
import { Routes, Route, Link } from "react-router-dom";
function App() {
    return (
        <div style={{ padding: 20 }}>
            <h1>REact Router V6</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/new">News</Link>
                    </li>
                    <li>
                        <a href="https://fullstack.edu.vn/?_type=tab">F8</a>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/new" element={<News />} />
            </Routes>
        </div>
    );
}

export default App;
