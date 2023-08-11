import React from "react";
import PropTypes from 'prop-types';
function StartGame({onStartGame}){
    return(
        <>
            <div>
                <h1>Welcome to React Quiz Game!</h1>
                <button onClick={onStartGame}>Start</button>
            </div>
        </>
    )
}
StartGame.propTypes = {
    onStartGame: PropTypes.func.isRequired,
  };
export default StartGame;