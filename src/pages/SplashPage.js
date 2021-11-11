import React from 'react'

export default function SplashPage() {
	return (
		<>
			<div className="container bg-dark text-info text-start border border-info">

				<div className="row">
					<h1><strong>Hi.</strong></h1>
					<h4>My name is </h4>
					<h1><strong><u>Tony Watson</u></strong>.</h1>
				</div>
				<div className="row">
					<h2>I'm an aspiring web developer.</h2>
				</div>
				<h2>While you're here, learn a little bit <a href="/about" className="link-light">about me</a>.</h2>
				<h2>Have a look at my <a href="/portfolio" className="link-light">portfolio</a>.</h2>
				<h2>Check out my <a href="/blog" className="link-light">blog</a>.</h2>
			</div>
		</>
	)
}
