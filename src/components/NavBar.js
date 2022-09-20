import { Title } from "@mantine/core";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"
import logo from "../assets/imgs/logo.png";


function NavBar() {
    return (  
        <div className="top_page">
            <header className="header">
                <Link to="/">
                    <img src={logo} alt="logo" width="64px" />
                </Link>
                <nav className="header_nav">
                    <Link to="/category/Necklaces">
                        <Title order={3} className="header_link">Collares</Title>
                    </Link>
                    <Link to="/category/Bracelets">
                        <Title order={3} className="header_link">Pulseras</Title>
                    </Link>
                    <Link to="/category/Rings">
                        <Title order={3} className="header_link">Anillos</Title>
                    </Link>
                </nav>
                <CartWidget />
            </header>
        </div>
    )
}

export default NavBar