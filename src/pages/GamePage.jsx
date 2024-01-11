import { useState } from "react";
import CardDisplay from "../components/CardDisplay";
import LosePage from "./LosePage";
import WinPage from "./WinPage";

export default function GamePage({
  currentScore,
  setCurrentScore,
  gameStatus,
  setGameStatus,
  handleReplay,
}) {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const numberOfCards = 6;

  const handleCurrentPokemon = (array) => {
    setCurrentPokemon(array);
  };

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
          handleCurrentPokemon={handleCurrentPokemon}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setGameStatus={setGameStatus}
        ></CardDisplay>
      )}
    </div>
  );
}
