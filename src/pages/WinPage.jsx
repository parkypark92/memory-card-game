export default function WinPage({ score, handleReplay }) {
  return (
    <div className="game-result">
      <h2>Congratulations, you caught all {score} Pokemon! </h2>
      <button onClick={handleReplay}>Replay</button>
    </div>
  );
}
