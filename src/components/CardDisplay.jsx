import Card from "./Card";
import randomNumber from "../utils/random-number";

export default function CardDisplay({
  numberOfCards,
  currentPokemon,
  handleCurrentPokemon,
}) {
  if (currentPokemon.length === 0) {
    getRandomPokemon();
  }

  async function getRandomPokemon() {
    const randomIds = [];
    while (randomIds.length < numberOfCards) {
      const randomId = randomNumber(150);
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    await Promise.all(randomIds.map(getPokemon)).then((result) => {
      handleCurrentPokemon(result);
    });
  }

  async function getPokemon(id) {
    if (`pokeImage${id}` in localStorage) {
      return localStorage.getItem(`pokeImage${id}`);
    } else {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      localStorage.setItem(`pokeImage${id}`, data.sprites.front_default);
      return data.sprites.front_default;
    }
  }

  return (
    <div className="card-display">
      {currentPokemon.map((pokemon, index) => {
        return (
          <Card
            backgroundImage={pokemon}
            key={index}
            handleClick={getRandomPokemon}
          ></Card>
        );
      })}
    </div>
  );
}
