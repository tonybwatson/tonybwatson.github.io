import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

export default function Portfolio() {
	return (
		<div>
			<>
				<Container >
					<Row className="card-group">
						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4 d-flex align-items-stretch">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Login Page</Card.Title>
									<Card.Text>
										This project had three paths. I chose to follow the third path - setting up a login page. Users can set up a new user account, log in, and log out.
    				</Card.Text>
												<Button className="btn btn-dark border border-info m-1"
													href="https://fishing-hooks-6cc80.web.app/"
													target="_blank">Project</Button>
												<Button className="btn btn-dark border border-info m-1"
													href="https://github.com/tonybwatson/fishing-hooks"
													target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4 d-flex align-items-stretch">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>To-Do List</Card.Title>
									<Card.Text>
										The objective of this project was to create a to-do list using React. New to-do items can be added to the list, checked off and deleted.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href="https://to-do-list-177dd.web.app"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/to-do-list"
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Restaurant Menu</Card.Title>
									<Card.Text>
										This project uses an Axios API call and React to dynamically render a restaurant menu.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href="https://restaurant-menu-600d0.web.app"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/restaurant-menu"
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col className="col-lg-4 mb-3 d-flex align-items-stretch">
							<Card className="bg-dark border border-info mb-4">
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    				</Card.Text>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info"
										href=""
										target="_blank">Code</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		</div>
	)
}
