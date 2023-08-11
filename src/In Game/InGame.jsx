import React, {useState} from "react";
import questionsData from '../assets/questions.json'
import PropTypes from 'prop-types';

function InGame({onEndGame}){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    const handlePrevious = () => {
        if (currentQuestionIndex > 0){
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    
    const handleNext = () => {
        if (currentQuestionIndex < questionsData.length - 1){
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    };

    const handleSubmit = () => {
        onEndGame();
    }
    const currentQuestion = questionsData[currentQuestionIndex];

    const handleSelectAnswer = (index) => {
        setSelectedAnswerIndex(index);
      };

    return(
        <>
            <h2>Question {currentQuestion.id}/{questionsData.length}</h2>
            <h3>{currentQuestion.question_content}</h3>
            <ul>
            {currentQuestion.answers.map((answer, index) => (
                <li
                    key={index}
                    className={`option ${selectedAnswerIndex === index ? 'selected' : ''} ${answer.correct ? 'correct' : ''}`}
                    onClick={() => handleSelectAnswer(index)}
                >
                    {answer.answer_content}
                </li>
                ))}
            </ul>
            {currentQuestionIndex > 0 && (
            <button onClick={handlePrevious}>
                Previous
            </button>)}
            {currentQuestionIndex < questionsData.length - 1 && (
            <button onClick={handleNext}>
                Next
            </button>)}
            {currentQuestionIndex === questionsData.length - 1 && (
            <button onClick={handleSubmit}>
                Submit
            </button>)}
        </>
    )
}
InGame.propTypes = {
    onEndGame: PropTypes.func.isRequired,
  };
export default InGame;