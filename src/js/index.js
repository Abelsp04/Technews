//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import withScrollReveal from "react-scrollreveal";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));
// document.querySelector(".menu-btn").addEventListener("click", () => {
// 	document.querySelector(".nav-menu").classList.toggle("show");
// });

// ScrollReveal().reveal(".showcase-container");
// ScrollReveal().reveal(".news-cards", { delay: 500 });
// ScrollReveal().reveal(".news-cards-two", { delay: 500 });
// ScrollReveal().reveal(".cards-banner", { delay: 500 });
// ScrollReveal().reveal(".cards-banner-two", { delay: 500 });
