import Card from "../components/Card";

export default function GamePage() {
  const id = 2;
  async function getPokemon(id) {
    if (id in localStorage) {
      console.log("retrieved");
    } else {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const data = await response.json();
      localStorage.setItem(id, data.sprites.front_default);
      console.log("cached");
    }
  }

  return (
    <div className="game-page">
      <div className="card-display">
        <Card handleClick={() => getPokemon(id)}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
