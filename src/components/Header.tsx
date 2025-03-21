import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            marginBottom:"50px"
        }}>
            <h1 style={{ fontSize: "1.5rem" }}>Movie App</h1>
            <nav>
                <Link to="/" style={{ color: "#fff", textDecoration: "none", marginRight: "15px" }}>Home</Link>
                <Link to="/movie-lists" style={{ color: "#fff", textDecoration: "none", marginRight: "15px" }}>My Lists</Link>

            </nav>
        </header>
    );
};

export default Header;