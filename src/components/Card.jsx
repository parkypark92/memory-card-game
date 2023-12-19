export default function Card({ handleClick, backgroundImage }) {
  return (
    <div
      onClick={handleClick}
      className="card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
}
