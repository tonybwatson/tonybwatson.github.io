import React from 'react'
import facepic from '../img/squareportrait.png'

export default function SplashPage() {
	return (
		<>
			<div className="
				container 
				bg-dark 
				text-info 
				text-center 
				border 
				border-info 
				rounded 
				mt-4 animate__animated animate__fadeIn animate__delay-1s">
				<div className="row">
					<h1 className="my-2"><strong>Hi.</strong></h1>
					<h2>My name is </h2>
					<h1><strong><u>Tony Watson</u></strong>.</h1>
				</div>
				<div className="row">
					<h2>I'm a web developer.</h2>
				</div>
				<img src={facepic} alt="Me" className="img-fluid rounded-circle my-3" id="facepic"/>
				<h1 className="mb-4"><u>While you're here:</u> </h1>
				<h2>Learn a little bit <a href="/about" className="link-light">about me</a>.</h2>
				<h2>Have a look at my <a href="/portfolio" className="link-light">portfolio</a>.</h2>
				<h2 className="mb-4">Check out my <a href="/blog" className="link-light">blog</a>.</h2>
			</div>
		</>
	)
}
