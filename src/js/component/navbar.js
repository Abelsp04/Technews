import React from "react";

const Navbar = () => {
	return (
		<div className="container">
			<nav className="nav-main">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTos_hv1kpn6_GyYKnHq-NVgaLHPV7LyCD2vVrdbz3ZzBxRofAL&usqp=CAU"
					alt="techNews Logo"
					className="nav-brand"
				/>
				<ul className="nav-menu ">
					<li>
						<a href="#">Web Development</a>
					</li>
					<li>
						<a href="#">Block Chain</a>
					</li>
					<li>
						<a href="#">Artifitial Intelligence</a>
					</li>
					<li>
						<a href="#">Machine Learning</a>
					</li>
					<li>
						<a href="#">Quantum Computing</a>
					</li>
					<li>
						<a href="#">Startup</a>
					</li>
					<li>
						<a href="#">More</a>
					</li>
				</ul>
				<ul className="nav-menu-right">
					<li>
						<a href="#">
							<i className="fas fa-search" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;
