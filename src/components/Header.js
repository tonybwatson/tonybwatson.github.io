import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default function Header() {
	return (
		<>
			<Router>
				<Navbar bg="dark" variant="dark" expand="xs">
					<Container >
						<Navbar.Brand ></Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" className="border border-info"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto" >
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
		</>
	)
}
