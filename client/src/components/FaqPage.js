import React, { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import "../styles/Faqpage.css";
export default function FaqPage() {
	const [questionClicked, setQuestionClicked] = useState(false);

	function handleQuestionClick(setState) {
		setState((prev) => !prev);
	}
	return (
		<section className="faq-container">
			<article className="question">
				<header>
					<h4>WHAT IS THE DELIVERY TIME & COST?</h4>
					<button
						aria-label={questionClicked ? "hide answer" : "show answer"}
						onClick={() => handleQuestionClick(setQuestionClicked)}
					>
						{questionClicked ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
					</button>
				</header>
				{questionClicked && (
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
						alias expedita consequatur corrupti aperiam ad molestias corporis
						dolores sit harum aut nemo sapiente, quasi eveniet a voluptas iusto
						quam recusandae.
					</p>
				)}
			</article>
		</section>
	);
}
