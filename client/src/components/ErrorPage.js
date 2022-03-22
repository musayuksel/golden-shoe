import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
export default function ErrorPage() {
	return (
		<section className="error-container">
			<h1 className="title">404</h1>

			<h4 className="sub-heading">Page Not Found</h4>

			<p className="error-paragraph">
				We're sorry, but the page you're looking for doesn't exist...
			</p>

			<Link className="go-home-page" to="/">
				Go Back Home
			</Link>
		</section>
	);
}
