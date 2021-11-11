import React from 'react'
import bouncing from '../img/bouncing.jpeg'
import clock from '../img/clock.jpeg'
import login from '../img/login.jpeg'
import mindreader from '../img/mindreader.jpeg'
import restaurant from '../img/restaurant.jpeg'
import todo from '../img/to-do.jpeg'
import weather from '../img/weather.jpeg'
import { Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap'

export default function Portfolio() {
	return (
		<div>
			<>
				<Container>
						<CardGroup>
					<Row>
							<Col className="col-md-4 mb-3">
								<Card className="bg-dark border border-info mb-4 h-100">
									<Card.Body>
										<Card.Title>Login Page</Card.Title>
										<img src={login} alt="login screen" className="img-fluid" />
										<Card.Text>
											This project is a login page which utilizes React hooks to allow users to set up a user account, log in, and log out.
    								</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button className="btn btn-dark border border-info m-1"
											href="https://fishing-hooks-6cc80.web.app/"
											target="_blank">Project</Button>
										<Button className="btn btn-dark border border-info m-1"
											href="https://github.com/tonybwatson/fishing-hooks"
											target="_blank">Code</Button>
									</Card.Footer>
								</Card>
							</Col>

							<Col className="col-md-4 mb-3 ">
								<Card className="bg-dark border border-info mb-4 h-100">

									<Card.Body>
										<Card.Title>To-Do List</Card.Title>
										<img src={todo} alt="to-do list" className="img-fluid" />
										<Card.Text>
											The objective of this project was to create a to-do list using React. New to-do items can be added to the list, checked off and deleted.
    								</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button className="btn btn-dark border border-info m-1"
											href="https://to-do-list-177dd.web.app"
											target="_blank">Project</Button>
										<Button className="btn btn-dark border border-info m-1"
											href="https://github.com/tonybwatson/to-do-list"
											target="_blank">Code</Button>
									</Card.Footer>
								</Card>
							</Col>

							<Col className="col-md-4 mb-3 ">
								<Card className="bg-dark border border-info mb-4 h-100">
									<Card.Body>
										<Card.Title>Restaurant Menu</Card.Title>
										<img src={restaurant} alt="restaurant menu" className="img-fluid" />
										<Card.Text>
											This project uses an Axios API call and React to dynamically render a restaurant menu.
    								</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Button className="btn btn-dark border border-info m-1"
											href="https://restaurant-menu-600d0.web.app"
											target="_blank">Project</Button>
										<Button className="btn btn-dark border border-info m-1"
											href="https://github.com/tonybwatson/restaurant-menu"
											target="_blank">Code</Button>
									</Card.Footer>
								</Card>
							</Col>
						
					</Row>

					<Row>
						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">
								<Card.Body>
									<Card.Title>Mind Reader</Card.Title>
									<Card.Text>
										This project uses Javascript to control page state. It uses a simple mathematical trick to guess the user's chosen number.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">
								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    							</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">

								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    							</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100">

								<Card.Body>
									<Card.Title>Alarm Clock</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
    							</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href=""
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info"
										href=""
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
					</CardGroup>
				</Container>
			</>
		</div>
	)
}