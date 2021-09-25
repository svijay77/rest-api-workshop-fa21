import { Nav, Navbar } from "react-bootstrap"


const NavBar = () => {
    // const navStyle = {paddingRight: 5}
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                    OSAI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#" as="span">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;