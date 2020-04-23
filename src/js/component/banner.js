import React from "react";

const Banner = () => {
	return (
		<div className="card-banner">
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
	);
};
export default Banner;
