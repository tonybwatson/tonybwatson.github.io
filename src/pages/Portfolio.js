import React from 'react'
import Header from '../components/Header'
import breaddit from '../img/breaddit.jpg'
import clock from '../img/clock.jpeg'
import login from '../img/login.jpeg'
import mindreader from '../img/mindreader.jpeg'
import restaurant from '../img/restaurant.jpeg'
import todo from '../img/to-do.jpeg'
import weather from '../img/weather.jpeg'
import { Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap'

export default function Portfolio() {
	return (
		<>
			<Header />
			<Container>
				<Row>
					<Col xs={3}></Col>
					<Col xs={6} className="my-5">
						<h1 className="py-2 text-center text-info border border-info rounded">
							<u>My Most Recent Projects</u>
						</h1>
					</Col>
					<Col xs={3}></Col>

						<Col xs={3}></Col>
						<Col className="mb-4">
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>Breaddit</Card.Title>
									<a href="https://breaddit.web.app/" target="_blank" rel="noreferrer">
										<img src={breaddit} alt="breaddit" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
										This project is a clone of the popular content-sharing site, Reddit. Users can create unique usernames, create posts, create new "subreaddits" for sharing different kinds of content, comment on posts, and vote on content.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href="https://breaddit.web.app/"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/breadditFrontEnd"
										target="_blank">Front-End Code</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/breadditBackEnd"
										target="_blank">Back-End Code</Button>
								</Card.Footer>
							</Card>
						</Col>
						<Col xs={3}></Col>
					</Row>

				<CardGroup>
					<Row>
						<Col className="col-md-4 mb-3">
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>Login Page</Card.Title>
									<a href="https://fishing-hooks-6cc80.web.app/" target="_blank" rel="noreferrer">
										<img src={login} alt="login screen" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
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
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>To-Do List</Card.Title>
									<a href="https://to-do-list-177dd.web.app" target="_blank" rel="noreferrer">
										<img src={todo} alt="to-do list" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
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
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>Restaurant Menu</Card.Title>
									<a href="https://restaurant-menu-600d0.web.app" target="_blank" rel="noreferrer">
										<img src={restaurant} alt="restaurant menu" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
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
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>Mind Reader</Card.Title>
									<a href="https://tonybwatson.github.io/mindReader/" target="_blank" rel="noreferrer">
										<img src={mindreader} alt="mindreader" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
										This project uses Javascript to control page state. It uses a simple mathematical trick to guess the user's chosen number.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href="https://tonybwatson.github.io/mindReader/"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/mindReader"
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>Weather App</Card.Title>
									<a href="https://tonybwatson.github.io/weather_app/"
										target="_blank" rel="noreferrer">
										<img src={weather} alt="weather app" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
										This project utilizes an API call to display weather information from a user-submitted zip code.
    								</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href="https://tonybwatson.github.io/weather_app/"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/weather_app"
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>

						<Col className="col-md-4 mb-3 ">
							<Card className="bg-dark border border-info mb-4 h-100 animate__animated animate__zoomIn">
								<Card.Body>
									<Card.Title>80's Alarm Clock</Card.Title>
									<a href="https://tonybwatson.github.io/alarm_clock/"
										target="_blank" rel="noreferrer">
										<img src={clock} alt="clock" className="img-fluid portfolioPic" />
									</a>
									<Card.Text className="mt-3">
										This project uses vanilla Javascript and CSS to make an alarm clock.
    							</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Button className="btn btn-dark border border-info m-1"
										href="https://tonybwatson.github.io/alarm_clock/"
										target="_blank">Project</Button>
									<Button className="btn btn-dark border border-info m-1"
										href="https://github.com/tonybwatson/alarm_clock"
										target="_blank">Code</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</CardGroup>
			</Container>
		</>
	)
}