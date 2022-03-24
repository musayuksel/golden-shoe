import React, { useState, useEffect } from "react";
import {
	BsFillCaretUpFill,
	BsFillCaretDownFill,
	BsPhoneFill,
	BsWhatsapp,
} from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import "../styles/Faqpage.css";
function QuestionCards({ question, answer }) {
	// answers are placaholder for MVP
	const [questionClicked, setQuestionClicked] = useState(false);
	function handleQuestionClick(setState) {
		setState((prev) => !prev);
	}
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<article className="question">
			<header onClick={() => handleQuestionClick(setQuestionClicked)}>
				<h4>{question}</h4>
				<button
					aria-label={questionClicked ? "hide answer" : "show answer"}
					onClick={() => handleQuestionClick(setQuestionClicked)}
				>
					{questionClicked ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
				</button>
			</header>
			{questionClicked && (
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, alias
					expedita consequatur corrupti aperiam ad molestias corporis dolores
					sit harum aut nemo sapiente, quasi eveniet a voluptas iusto quam
					recusandae.
				</p>
			)}
		</article>
	);
}
export default function FaqPage() {
	return (
		<>
			<section className="faq-container">
				<h1>FREQUENTLY ASKED QUESTIONS</h1>
				<QuestionCards question="WHAT IS THE DELIVERY TIME & COST?" />
				<QuestionCards question="HOW DO I RETURN MY PRODUCT(S)?" />
				<QuestionCards question="CAN I EXCHANGE MY PRODUCT(S)?" />
				<QuestionCards question="HOW DO I CHECK MY ORDER STATUS?" />
			</section>
			<section className="customer-service">
				<section className="customer-service-header">
					<h2>STILL CAN'T FIND YOUR ANSWER?</h2>
					<p>ASK OUR CUSTOMER SERVICE</p>
					<p>Mon - Fri : 9:00 AM to 5:00 PM </p>
				</section>
				<section className="contact-cards-container">
					<article className="call-golden-shoe">
						<div className="icon">
							<BsPhoneFill />
						</div>
						<p>CALL</p>
						<p>+44 1234 567 890 </p>
						<p>
							DEPENDING ON THE LANDLINE OR MOBILE NETWORK PROVIDER, ADDITIONAL
							COSTS MAY APPLY.
						</p>
					</article>
					<article className="whatsapp-golden-shoe">
						<div className="icon">
							<BsWhatsapp />
						</div>
						<p>ASK ADIDAS VIA WHATSAPP</p>
						<p>+44 1234 567 890 </p>
						<p>
							Add number to the contact list on your smartphone and reach us
							fast via WhatsApp.
						</p>
					</article>
					<article className="facebook-golden-shoe">
						<div className="icon">
							<FaFacebookMessenger />
						</div>
						<p>ASK ADIDAS VIA FACEBOOK</p>
						<p>Use the private message option to contact our support team.</p>
					</article>
				</section>
			</section>
		</>
	);
}
