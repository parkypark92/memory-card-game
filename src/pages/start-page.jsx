export default function StartPage({ handleClick, removeClickedStatus }) {
  removeClickedStatus();

  return (
    <div className="start-page">
      <div className="start-container">
        <h2 className="start-message">
          Click on each card only once. If you click on a card that has already
          been clicked, it is game over!
        </h2>
        <button className="start-button" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
