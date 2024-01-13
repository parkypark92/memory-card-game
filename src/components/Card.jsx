import { useEffect } from "react";

export default function Card({ handleClick, backgroundImage, dataID }) {
  useEffect(() => {
    setTimeout(() => {
      const cardsToFlip = document.querySelectorAll(".card");
      for (let card of cardsToFlip) {
        card.classList.remove("flipped");
      }
    }, 500);
  }, []);

  return (
    <div className="card-container">
      <div className="card flipped">
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
