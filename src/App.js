import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who invented the Light Bulb?',
			answerOptions: [
				{ answerText: 'AlexanderGrahamBell', isCorrect: false },
				{ answerText: 'AlbertEinstein', isCorrect: false },
				{ answerText: 'Nikola Tesla ', isCorrect: false },
				{ answerText: 'ThomasAlvaEdison', isCorrect: true},
			],
		},
		{
			questionText:' 1 L is equal to how many grams?',
			answerOptions:[
				{answerText:'800 ml', isCorrect:false},
				{answerText:'1000 ml', isCorrect:true},
				{answerText:'100 ml', isCorrect:false},
				{answerText:'200 ml',isCorrect:false}
			],
		},
		{
			questionText: 'Which planet in our solar system is known as the Red Planet?',
			answerOptions: [
				{ answerText: 'Jupiter', isCorrect: true },
				{ answerText: 'Mercury', isCorrect: false },
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Saturn', isCorrect: false },
			],
		},
		{
			questionText: ' Who discovered Penicillin?',
			answerOptions: [
				{ answerText: 'Alexander  Fleming', isCorrect: true },
				{ answerText: 'Alexandergrahambell', isCorrect: false },
				{ answerText: 'IssacNewton', isCorrect: false },
				{ answerText: 'Galileo Galilei', isCorrect: false },
			],
		},
		{
			questionText: ' Who successfully built and flew the world’s first Aeroplane?',
			answerOptions: [
				{ answerText: 'Ada Lovelace', isCorrect: false },
				{ answerText: 'The Wright Brothers', isCorrect: true },
				{ answerText: 'Charles Darwin', isCorrect: false },
				{ answerText: 'Marie Curie', isCorrect: false },
			],
		},
	];
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}