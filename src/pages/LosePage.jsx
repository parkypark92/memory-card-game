export default function LosePage() {
  for (let i = 1; i <= 150; i++) {
    if (`pokeImage${i}` in localStorage) {
      const obj = JSON.parse(localStorage.getItem(`pokeImage${i}`));
      obj.clicked = false;
      localStorage.setItem(`pokeImage${i}`, JSON.stringify(obj));
    }
  }
  return <h1>LOSER</h1>;
}
