import { useState } from "react";
import CardDisplay from "../components/CardDisplay";

export default function GamePage() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const numberOfCards = 6;

  const handleCurrentPokemon = (array) => setCurrentPokemon(array);

  return (
    <div className="game-page">
      <CardDisplay
        numberOfCards={numberOfCards}
        currentPokemon={currentPokemon}
        handleCurrentPokemon={handleCurrentPokemon}
      ></CardDisplay>
    </div>
  );
}
