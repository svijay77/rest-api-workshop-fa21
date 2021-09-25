import { Nav, Navbar } from "react-bootstrap"


const NavBar = () => {
    // const navStyle = {paddingRight: 5}
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                    Open-Source at Illinois
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                    <Navbar.Text>
                        <a href="https://www.opensourceatillinois.com">Home</a>
                    </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;