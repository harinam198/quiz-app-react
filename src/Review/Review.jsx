import React from "react";
import questionsData from '../assets/questions.json'
import PropTypes from 'prop-types';


function Review({onRestart}){
    return(
        <>
        <div>
            <h1>Review</h1>
            {questionsData.map((question, index) => (
                <div key={question.id} className="review-question">
                <p>
                    <strong>Question {index + 1}:</strong> {question.question_content}
                </p>
                <ul>
                    {question.answers.map((answer, answerIndex) => (
                    <li
                        key={answerIndex}
                        className={`review-answer ${answer.correct ? 'correct' : ''}`}
                    >
                        {answer.answer_content}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            <button onClick={onRestart}>Restart</button>
        </div>
        </>
    );
}

Review.propTypes = {
    questions: PropTypes.array.isRequired,
    onRestart: PropTypes.func.isRequired,
  };  

export default Review;