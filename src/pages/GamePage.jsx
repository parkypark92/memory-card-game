// import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import LosePage from "./LosePage";
import WinPage from "./WinPage";

export default function GamePage({
  currentScore,
  setCurrentScore,
  currentPokemon,
  setCurrentPokemon,
  gameStatus,
  setGameStatus,
  handleReplay,
}) {
  const numberOfCards = 6;

  return (
    <div className="game-page">
      {currentScore === 150 ? (
        <WinPage score={currentScore} handleReplay={handleReplay}></WinPage>
      ) : gameStatus === "lose" ? (
        <LosePage handleReplay={handleReplay} score={currentScore}></LosePage>
      ) : (
        <CardDisplay
          numberOfCards={numberOfCards}
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
        ></CardDisplay>
      )}
    </div>
  );
}
