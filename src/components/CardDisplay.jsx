import Card from "./Card";
import randomNumber from "../utils/random-number";

export default function CardDisplay({
  numberOfCards,
  currentPokemon,
  setCurrentPokemon,
  currentScore,
  setCurrentScore,
  setGameStatus,
}) {
  if (currentPokemon.length === 0) {
    getRandomPokemon(0);
  }

  async function getRandomPokemon(score) {
    const randomIds = [];
    while (randomIds.length < numberOfCards) {
      const randomId = randomNumber(150);
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    await Promise.all(randomIds.map(fetchPokemon)).then((result) => {
      let counter = 0;
      for (let object of result) {
        if (object.clicked) {
          counter++;
        }
      }
      if (counter === result.length) {
        getRandomPokemon();
      } else if (score < 1) {
        setCurrentPokemon(result);
      } else {
        setTimeout(() => setCurrentPokemon(result), 800);
      }
    });
  }

  async function fetchPokemon(id) {
    if (`pokeImage${id}` in localStorage) {
      return JSON.parse(localStorage.getItem(`pokeImage${id}`));
    } else {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      localStorage.setItem(
        `pokeImage${id}`,
        JSON.stringify({
          image: data.sprites.front_default,
          id: data.id,
          clicked: false,
        })
      );
      return { image: data.sprites.front_default, id: data.id, clicked: false };
    }
  }

  function updateClickedStatus(e) {
    const pokeID = e.target.getAttribute("data-id");
    const cardToUpdate = JSON.parse(localStorage.getItem(`pokeImage${pokeID}`));
    cardToUpdate.clicked = true;
    localStorage.setItem(`pokeImage${pokeID}`, JSON.stringify(cardToUpdate));
  }

  function handleCardClick(e) {
    const clickedCard = JSON.parse(
      localStorage.getItem(`pokeImage${e.target.getAttribute("data-id")}`)
    );
    if (clickedCard.clicked) {
      setGameStatus("lose");
      return;
    }
    updateClickedStatus(e);
    const cardsToFlip = document.querySelectorAll(".card");
    for (let card of cardsToFlip) {
      card.classList.add("flipped");
    }
    setCurrentScore(currentScore + 1);
    if (currentScore < 149) {
      getRandomPokemon(currentScore + 1);
    }
  }

  return (
    <div className="card-display">
      {currentPokemon.map((pokemon) => {
        return (
          <Card
            backgroundImage={pokemon.image}
            key={pokemon.id}
            handleClick={handleCardClick}
            dataID={pokemon.id}
          ></Card>
        );
      })}
    </div>
  );
}
