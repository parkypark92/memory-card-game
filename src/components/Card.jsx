export default function Card({ handleClick, backgroundImage, dataID }) {
  let color;
  const object = JSON.parse(localStorage.getItem(`pokeImage${dataID}`));
  if (object.clicked) {
    color = "green";
  } else {
    color = "red";
  }
  return (
    <div
      data-id={dataID}
      onClick={handleClick}
      className="card"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: color,
      }}
    ></div>
  );
}
