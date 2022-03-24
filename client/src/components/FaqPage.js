import React, { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import "../styles/Faqpage.css";
function QuestionCards({ question, answer }) {
	// answers are placaholder for MVP
	const [questionClicked, setQuestionClicked] = useState(false);
	function handleQuestionClick(setState) {
		setState((prev) => !prev);
	}
	return (
		<article className="question">
			<header>
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
		<section className="faq-container">
			<QuestionCards question="WHAT IS THE DELIVERY TIME & COST?" />
			<QuestionCards question="HOW DO I RETURN MY PRODUCT(S)?" />
			<QuestionCards question="CAN I EXCHANGE MY PRODUCT(S)?" />
			<QuestionCards question="HOW DO I CHECK MY ORDER STATUS?" />
		</section>
	);
}
