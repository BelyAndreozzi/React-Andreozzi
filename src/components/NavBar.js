import { Title } from "@mantine/core";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"
import logo from "../assets/imgs/logo.png";


function NavBar() {
    return (
        <header className="header">
            <NavLink to="/">
                <img src={logo} alt="logo" width="64px" />
            </NavLink>
            <nav className="header_nav">
                <NavLink to="/category/Necklaces">
                    <Title order={3} underline="false" className="header_link">Collares</Title>
                </NavLink>
                <NavLink to="/category/Bracelets">
                    <Title order={3} className="header_link">Pulseras</Title>
                </NavLink><NavLink to="/category/Rings">
                    <Title order={3} className="header_link">Anillos</Title>
                </NavLink>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar