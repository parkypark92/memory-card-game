export default function Card({ handleClick, backgroundImage, dataID }) {
  return (
    <div
      data-id={dataID}
      onClick={handleClick}
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
}
