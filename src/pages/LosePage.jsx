export default function LosePage({ handleReplay, score }) {
  return (
    <div className="game-result">
      <h1>You caught {score} Pokemon!</h1>
      <button onClick={handleReplay}>Replay</button>
    </div>
  );
}
