import React from "react";
import ReactDOM from "react-dom";
// import { Banner } from "./banner";

//include images into your bundle
// import { Navbar } from "./navbar.js";
// import { Footer } from "./footer.js";
// import { Banner } from "./banner.js";
// import { Card } from "./card.js";
//create your first component
export function Home() {
	return (
		<div>
			{/* Navbar */}
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
			{/* Showcase */}
			<div className="showcase-container">
				<h2>Big News Today</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<a href="#" className="btn">
					Read More <i className="fas fa-angle-double-right" />
				</a>
			</div>
			{/* Card1 */}
			<div className="news-cards">
				<div>
					<img
						src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>

				<div>
					<img
						src="https://images.pexels.com/photos/704767/pexels-photo-704767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/2258357/pexels-photo-2258357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
			</div>
			{/* Banner1 */}
			<div className="card-banner">
				<div className="content">
					<img
						src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h2>Where can I get some?</h2>
					<p>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration.
					</p>
					<a href="#" className="btn">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
			</div>
			{/* Card2 */}
			<div className="news-cards-two">
				<div>
					<img
						src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>

				<div>
					<img
						src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/2081166/pexels-photo-2081166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h3>Where does it come from?</h3>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock.
					</p>
					<a href="#">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
			</div>
			{/* Banner2 */}
			<div className="card-banner-two">
				<div className="content">
					<img
						src="https://images.pexels.com/photos/1758672/pexels-photo-1758672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
					<h2>Where can I get some?</h2>
					<p>
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration.
					</p>
					<a href="#" className="btn">
						Learn More <i className="fas fa-angle-double-right" />
					</a>
				</div>
			</div>
			{/* Social */}
			<section className="social">
				<p>Follow Technews</p>
				<div className="link">
					<a href="#">
						<i className="fab fa-facebook-f" />
					</a>
					<a href="#">
						<i className="fab fa-twitter" />
					</a>
					<a href="#">
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</section>
			{/* Footer-Links  */}
			<div className="footer-links">
				<div className="footer-container">
					<ul>
						<li>
							<a href="#">
								<h3>Tittle One</h3>
							</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">
								<h3>Tittle One</h3>
							</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">
								<h3>Tittle One</h3>
							</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">
								<h3>Tittle One</h3>
							</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
						<li>
							<a href="#">Blockchain</a>
						</li>
					</ul>
				</div>
			</div>
			{/* Footer */}
			<footer className="footer">
				<h5>Technews Copyright</h5>
			</footer>
		</div>
	);
}
