import React from 'react'


export default function AboutMe() {
	return (
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
					{/* <h2>My name is <strong>Tony Watson</strong>.</h2> */}
				</div>
				<div className="col-12">
					<p></p>
				</div>

			</div>
			<div className="">
				<p>
					I'm a web developer from Lexington, Kentucky.<br></br>
					Previously, I worked as an insurance agent for five years, a photographer for three, and worked through college at UPS.<br />
                I graduated from Eastern Kentucky University in 2012 with a degree in English.<br></br>
                In my free time, I enjoy video games, running, playing Dungeons &amp; Dragons, and brewing beer.
        </p>
			</div>

		</div>
	)
}