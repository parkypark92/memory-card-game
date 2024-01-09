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
        ></GamePage>
      )}
    </div>
  );
}

export default App;
