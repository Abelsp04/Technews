import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
//create your first component
export function Navbar() {
	return (
		<div>
			<div className="menu-btn">
				<i className="fas fa-bars" />
			</div>

			<div className="container">
				<nav className="nav-main">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1GQcxOAPMgAWadniqodkkefnJdgigYeyPhnBNMTrWUVFwPm_i&usqp=CAU"
						alt="techNews Logo"
						className="nav-brand"
					/>
					<ul className="nav-menu show ">
						<li>
							<a href="#">Website</a>
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
			<hr />
		</div>
	);
}
