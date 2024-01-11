export default function Header({ currentScore }) {
  let highScore = localStorage.getItem("high-score") || 0;
  if (currentScore > highScore) {
    highScore = currentScore;
    localStorage.setItem("high-score", highScore);
  }
  return (
    <header>
      <div className="scores">
        <div className="score-ctnr">
          <p className="score-label">Score: </p>
          <p className="score-number">{currentScore}</p>
        </div>
        <div className="score-ctnr">
          <p className="score-label">Best: </p>
          <p className="score-number">{highScore}</p>
        </div>
      </div>
    </header>
  );
}
