export default function Card({ handleClick, backgroundImage, dataID }) {
  return (
    <div className="card-container">
      <div className="card">
        <div
          data-id={dataID}
          onClick={handleClick}
          className="card-front"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}
