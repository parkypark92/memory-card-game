import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import LosePage from "./LosePage";

export default function GamePage({
  currentScore,
  setCurrentScore,
  gameStatus,
  setGameStatus,
}) {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const numberOfCards = 6;

  const handleCurrentPokemon = (array) => {
    setCurrentPokemon(array);
  };

  return (
    <div className="game-page">
      {gameStatus === "lose" ? (
        <LosePage></LosePage>
      ) : (
        <CardDisplay
          numberOfCards={numberOfCards}
          currentPokemon={currentPokemon}
          handleCurrentPokemon={handleCurrentPokemon}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setGameStatus={setGameStatus}
        ></CardDisplay>
      )}
    </div>
  );
}
