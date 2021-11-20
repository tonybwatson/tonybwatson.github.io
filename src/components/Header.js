import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, } from "react-router-dom";

export default function Header() {
	return (
		<>
			<Router>
				<Navbar bg="dark" variant="dark" expand="xs">
					<Container >
						<Navbar.Brand className="mt-3"><a className="text-white text-decoration-none" href="/"><h2>Tony Watson - Web Developer</h2></a></Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-info" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav  >
								<Nav.Link href="/about">
									About Me
								</Nav.Link>
								<Nav.Link href="/blog">
									Blog
								</Nav.Link>
								<Nav.Link href="/portfolio">
									Portfolio
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Router >
			<hr/>
		</>
	)
}
