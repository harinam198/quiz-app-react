import React, { useState } from 'react';
import StartGame from './Start Game/StartGame';
import InGame from './In Game/InGame';
import EndGame from './End Game/EndGame';
import Review from './Review/Review';
import questionsData from './assets/questions.json';
import './App.css';

function App() {
  const [gameState, setGameState] = useState("star");
  const [score, setScore] = useState(0);
  
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questionsData.length).fill(null)
  );

  const handleStartGame = () => {
    setGameState('in-game');
    setSelectedAnswers(new Array(questionsData.length).fill(null));
    setScore(0);
  }

  const handleEndGame = () => {
    setGameState('end-game');
    
    const calculatedScore = selectedAnswers.filter(
      (selectedAnswer, index) =>
        selectedAnswer === questionsData[index].answers.findIndex((answer) => answer.correct)
    ).length;
    setScore(calculatedScore);
  };

  const handleTryAgain = () => {
    setGameState('start');
  };

  const handleReview = () => {
    setGameState('review');
  };

  const handleRestart = () => {
    setGameState('start');
    setSelectedAnswers(new Array(questionsData.length).fill(null))
    setScore(0);
  };

  const handleSelectAnswer = (index, selectedAnswerIndex) => {
    const updateSelectedAnswers = [...selectedAnswers];
    updateSelectedAnswers[index] = selectedAnswerIndex;
    setSelectedAnswers(updateSelectedAnswers);
  }

  return (
    <>
     <div>
      {gameState === 'start' && <StartGame onStartGame={handleStartGame} />}
      {gameState === 'in-game' && (
        <InGame
          questions={questionsData}
          onEndGame={handleEndGame}
          onSelectAnswer={handleSelectAnswer}
          selectedAnswers={selectedAnswers}
        />
      )}
      {gameState === 'end-game' && (
        <EndGame score={score} onTryAgain={handleTryAgain} onReview={handleReview} />
      )}
      {gameState === 'review' && (
        <Review questions={questionsData} onRestart={handleRestart} />
      )}
    </div>
    </>
  )
}

export default App
