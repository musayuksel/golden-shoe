import React, { useEffect } from "react";
import "../styles/Return.css";
export default function Return() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main className="return">
			<h2>EXCHANGES & RETURNS</h2>
			<p className="free">For 60 days. It's free.</p>
			<button className="start-return">Start Your Return</button>
			<section className="how-to-return">
				<h3>HOW TO RETURN</h3>
				<ol>
					<li>
						Click on 'Start your return' and enter your email and order number.{" "}
					</li>
					<li>
						You’ll get a digital QR code, which is your return label. No need to
						print! Did you receive a printed return label in the box? Then use
						this label.
					</li>
					<li>
						Pack the product(s) in their original packaging and place in the box
						together with the delivery note (the form that came with your
						order). If you want to return items from multiple orders, make sure
						to include all delivery notes.{" "}
					</li>
					<li>
						If your order came with a printed return label, stick the printed
						return label over the old delivery label.
					</li>
					<li>
						Drop-off the parcel at a drop-off point. Return with the carrier
						that is mentioned on your return label to avoid return costs. If you
						received a digital QR code as your return label, have your QR code
						scanned at the drop-off point.
					</li>
					<li>
						Once we have processed the return, we will initiate your refund.
						Refunds to your original payment method can take up to 14 days.
						Refunds to e-Gift Cards are done via email immediately after the
						return is processed.
					</li>
				</ol>
			</section>
		</main>
	);
}
