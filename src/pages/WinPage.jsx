export default function WinPage({ score, handleReplay }) {
  return (
    <div className="game-result">
      <h1>Congratulations, you caught all {score} Pokemon! </h1>
      <button onClick={handleReplay}>Replay</button>
    </div>
  );
}
