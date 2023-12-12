export default function StartPage({ handleClick }) {
  return (
    <div className="start-page">
      <h2 className="start-message">
        Click on each card only once. If you click on a card that has already
        been clicked, it is game over!
      </h2>
      <button className="start-button" onClick={handleClick}>
        Start Game
      </button>
    </div>
  );
}
