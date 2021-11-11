import React from 'react'

export default function Week8() {
	return (
		<div className="container">
			<div className="card bg-dark border border-info">
				<div className="card-body">
					<h2 className="card-title">Week Eight</h2>
					<h6 className="card-subtitle mb-2 text-muted">10/11 - 10/15/2021</h6>
					<h4>The week in review...</h4>
					<p className="card-text text-start">
						This week, we started working with React, a Javascript framework. It allows separation of
              components into their own files. <br />
								The best thing about it, though, is JSX, which allows you to write html directly from
								Javascript more easily than in pure JS.
                </p>
					<h4>On Frameworks</h4>
					<p class="card-text text-start">
						So far, I’m enjoying using Javascript frameworks. Being able to simplify most of the more
						basic stuff, like actually getting information written to the page without
                            “document.getElementBy(<em>Internal screaming</em>)” is fantastic. <br />

									I’m excited to learn more and
                            improve my ability to implement frameworks, particularly React, going forward. <br />

										I’m hoping that in the next few weeks we implement a JS linting tool, such as ESLint or
                            JSLint, which would hopefully help me avoid minor errors. <br />

											I haven’t really found any Javascript tools that intrigue me, though I’ll spend some time
											over the next week looking for tools that may be useful for my final project. (Speaking of
											which, I have no idea yet what I’ll be doing for my final project. I’ll also need to put
                            some time into figuring that out ASAP.) <br />
					</p>
				</div>
			</div>
		</div>
	)
}
