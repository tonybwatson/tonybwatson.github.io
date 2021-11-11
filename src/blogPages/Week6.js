import React from 'react'

export default function BlogTemplate() {
	return (
		<div className="container">
			<div className="card bg-dark border border-info">
				<div className="card-body">
					<h2 className="card-title">Week Six</h2>
					<h6 className="card-subtitle mb-2 text-muted">9/27 - 10/1/2021</h6>
					<p className="card-text text-start">
						<h4>What I learned this week</h4>
						<ul class="text-start">
							<li>Deleting large blocks of code and starting over is not only completely acceptable, it's
							also often necessary. It's better to delete something that makes no logical sense and
							doesn't work, rewrite and rework the pseudocode, and end with a product that works, than to
						continue to pour time into something that doesn't work.</li>
							<li>Asking for help is fine and dandy, and leads to faster solutions.</li>
							<li>Sometimes just bouncing an idea off of someone else can lead you to the answer. </li>
							<li>The most important words to remember when working with Bootstrap are "Container, Row,
						Column."</li>
						</ul>
					</p>
					<h3>My Definition of "Good" Code:</h3>
					<p class="card-text text-start">
						Good code works. Good code is reasonably easy to read. Good code doesn't repeat itself
						any
						more than is absolutely necessary. Good code gets the job done in the most efficient
                                way.<br />
					</p>
					<figure>
						<img className="img-thumbnail col-4"
							src="https://cdn.vox-cdn.com/thumbor/ScNYkpguBDqu5xMCI0xGQP4UGPw=/0x0:900x500/1400x788/filters:focal(378x178:522x322):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49493993/this-is-fine.0.jpg" alt="Dog in a room on fire saying, 'This is fine.'"/>
						<figcaption class="figure-caption text-white">Pictured: Me, reading through any given line of my code </figcaption>
					</figure>
					<h3>On Being a "Good" Developer:</h3>
					<p class=" text-md-left p-4">
						I'd imagine good developers deliver code that works, and they do so within a reasonable
						time
						frame.
                                Good developers strive to improve their quality of work. <br />
								Good developers put in their best effort to make the best product possible. <br />
									Good developers follow through on their work. <br />
					</p>

					<h3>On What Programmers Hate Doing</h3>
					<p class=" text-md-left p-4">
						This programmer currently dislikes dealing with Bootstrap. He doesn't have a ton of
						practice
                                with it yet, so working with it tends to frustrate him.<br />
											This programmer dislikes styling - he prefers to make things that work rather than
											things
											that
                                are pretty. Once he's had more practice, perhaps that'll change. <br />
												This programmer is a huge fan of talking in third-person.
                            </p>
                     
		</div>
			</div >
		</div >
	)
}
