import React from 'react'
import Header from '../components/Header'


export default function AboutMe() {
	return (
		<>
			<Header />
			<div className="container border border-info">
				<div className="row">
					<div className="col-12">
						<p></p>
					</div>
					<div className="col-12 text-info">
						<h1><u>About Me</u></h1>
					</div>
					<div className="col-12">
						<p></p>
					</div>
					<div className="col-12">
					</div>
					<div className="col-12">
						<p></p>
					</div>
				</div>
				<div>
					<p>
						I'm a web developer from Lexington, Kentucky.<br></br>
					Previously, I worked as an insurance agent for five years, a photographer for three, and worked through college at UPS.<br />
                I graduated from Eastern Kentucky University in 2012 with a degree in English and a minor in Journalism.<br></br>
                In my free time, I enjoy video games, running, playing Dungeons &amp; Dragons, lockpicking, and brewing beer.
        </p>
				</div>
			</div>
		</>
	)
}