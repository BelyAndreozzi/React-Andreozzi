import { Anchor } from "@mantine/core";
import CartWidget from "./CartWidget";



function NavBar() {
    return(
        <header className="header">
                <h1 className="header_title">Joyería</h1>
                <nav>
                    <Anchor href="#" color={"dark"} align="center" className="header_anchor">Collares</Anchor>
                    <Anchor href="#" color={"dark"} className="header_anchor">Anillos</Anchor>
                    <Anchor href="#" color={"dark"} className="header_anchor">Pulseras</Anchor>
                </nav>
                <CartWidget/>
        </header> 
    )
}

export default NavBar