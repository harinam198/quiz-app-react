import React from "react";
import PropTypes from 'prop-types';

function EndGame({score, onTryAgain, onReview}){
    return(
        <>
            <div>
                <h1>Game Over</h1>
                <p>Your Score: {score}</p>
                <button onClick={onTryAgain}>Try Again</button>
                <button onClick={onReview}>Review</button>
            </div>
        </>
    );
}
EndGame.propTypes = {
    score: PropTypes.number.isRequired,
    onTryAgain: PropTypes.func.isRequired,
    onReview: PropTypes.func.isRequired,
  };
export default EndGame;