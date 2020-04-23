import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../component/navbar.js";
import Showcase from "./showcase.js";
import Cards from "./cards.js";
import Banner from "./banner.js";
import Social from "./social.js";
import FooterLinks from "./footer-links.js";
import Footer from "./footer.js";
//create your first component
export function Home() {
	return (
		<div className="container">
			<Navbar />
			<hr />
			<Showcase />
			<Cards />
			<Banner />
			<Cards />
			<Banner />
			<Social />
			<FooterLinks />
			<Footer />
		</div>
	);
}
