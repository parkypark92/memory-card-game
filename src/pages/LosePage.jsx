export default function LosePage({ handleReplay, score }) {
  return (
    <div className="game-result">
      <h2>You caught {score} Pokemon!</h2>
      <button onClick={handleReplay}>Replay</button>
    </div>
  );
}
