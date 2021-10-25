import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div className="header"><h1>Tony Watson's<br></br> Bootcamp Blog</h1></div>
        <nav className="navbar navbar-light text-info flex-end" >
            <div className="container border-bottom border-info">
                <a className="navbar-brand" href="https://tonybwatson.github.io">
                </a>
                <button className="navbar-toggler float-end btn btn-info pb-1 border border-info" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item text-info">
                            <a className="nav-link active text-info" aria-current="page" href="./pages/Portfolio.js">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-info" aria-current="page" href="./pages/AboutMe.js">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-info" aria-current="page" href="./pages/Blog.js">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}

        </>
    )
}
