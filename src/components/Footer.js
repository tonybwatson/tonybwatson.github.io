import React from 'react'
import email from '../img/001-envelope.png'
import linkedin from '../img/002-linkedin.png'
import github from '../img/003-github.png'

export default function Footer() {
	return (
		<>
			{/* <footer className="footer mt-auto text-center">
				<span>Contact Me:</span>
				<div class="container">
					<span>© Tony Watson 2021</span>
				</div>
			</footer> */}

			<footer class="py-3 my-4">
				<h4 className="text-center">Contact Me:</h4>
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="https://www.linkedin.com/in/tonybwatson/" class="nav-link px-2 text-white"><img className="icon" src={linkedin} alt="linkedin"/></a></li>
      <li class="nav-item"><a href="https://github.com/tonybwatson" class="nav-link px-2 text-white"><img className="icon" src={github} alt="github"/></a></li>
      <li class="nav-item"><a href="mailto:tonybwatson@gmail.com" class="nav-link px-2 text-white"><img className="icon" src={email} alt="email"/></a></li>
    </ul>
    <p class="text-center text-muted">© 2021 Tony Watson</p>
  </footer>
		</>
	)
}
