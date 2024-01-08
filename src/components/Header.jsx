export default function Header({ currentScore }) {
  let highScore = localStorage.getItem("high-score") || 0;
  if (currentScore > highScore) {
    highScore = currentScore;
    localStorage.setItem("high-score", highScore);
  }
  return (
    <header>
      <div>
        <p>Score: {currentScore}</p>
        <p>Best: {highScore}</p>
      </div>
    </header>
  );
}
