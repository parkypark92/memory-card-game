import { useState } from "react";
import GamePage from "./pages/GamePage";
import StartPage from "./pages/start-page";
import Header from "./components/Header";

import "./styles/App.css";
import "./styles/game-page.css";
import "./styles/start-page.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [gameStatus, setGameStatus] = useState("");

  function startGame() {
    setGameStarted(true);
    setGameStatus("first-turn");
  }

  function resetGame() {
    removeClickedStatus();
    setCurrentScore(0);
    setGameStatus("first-turn");
    setCurrentPokemon([]);
  }

  function removeClickedStatus() {
    for (let i = 1; i <= 150; i++) {
      if (`pokeImage${i}` in localStorage) {
        const obj = JSON.parse(localStorage.getItem(`pokeImage${i}`));
        obj.clicked = false;
        localStorage.setItem(`pokeImage${i}`, JSON.stringify(obj));
      }
    }
  }

  if (currentScore === 1 && gameStatus === "first-turn") {
    setGameStatus("in-play");
  }

  return (
    <div className="page-background">
      <Header
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      ></Header>
      {!gameStarted ? (
        <StartPage
          handleClick={startGame}
          removeClickedStatus={removeClickedStatus}
        ></StartPage>
      ) : (
        <GamePage
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          currentPokemon={currentPokemon}
          setCurrentPokemon={setCurrentPokemon}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          handleReplay={resetGame}
        ></GamePage>
      )}
    </div>
  );
}

export default App;
