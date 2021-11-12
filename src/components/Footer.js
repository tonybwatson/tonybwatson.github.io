import React from 'react'

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
      <li class="nav-item"><a href="https://www.linkedin.com/in/tonybwatson/" class="nav-link px-2 text-white">LinkedIn</a></li>
      <li class="nav-item"><a href="https://github.com/tonybwatson" class="nav-link px-2 text-white">Github</a></li>
      <li class="nav-item"><a href="mailto:tonybwatson@gmail.com" class="nav-link px-2 text-white">Email</a></li>
    </ul>
    <p class="text-center text-muted">© 2021 Tony Watson</p>
  </footer>
		</>
	)
}
