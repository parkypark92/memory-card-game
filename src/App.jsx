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
  const [gameStatus, setGameStatus] = useState("");

  function startGame() {
    setGameStarted(true);
  }

  function resetGame() {
    removeClickedStatus();
    setCurrentScore(0);
    setGameStatus("");
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

  // removeClickedStatus();

  return (
    <div className="page-background">
      <Header
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      ></Header>
      {!gameStarted ? (
        <StartPage handleClick={startGame}></StartPage>
      ) : (
        <GamePage
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          handleReplay={resetGame}
        ></GamePage>
      )}
    </div>
  );
}

export default App;
