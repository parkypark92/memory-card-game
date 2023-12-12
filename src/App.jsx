import { useState } from "react";
import GamePage from "./pages/GamePage";
import StartPage from "./pages/start-page";

import "./styles/App.css";
import "./styles/game-page.css";
import "./styles/start-page.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    setGameStarted(true);
  }

  return (
    <div className="page-background">
      {!gameStarted ? (
        <StartPage handleClick={startGame}></StartPage>
      ) : (
        <GamePage></GamePage>
      )}
    </div>
  );
}

export default App;
