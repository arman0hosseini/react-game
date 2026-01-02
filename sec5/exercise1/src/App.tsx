import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  function handleCLick() {
    setGame({ ...game, player: { ...game.player, name: "Arman" } });
  }

  return (
    <div>
      <h2>{game.player.name}</h2>
      <button onClick={handleCLick}>Push Me</button>
    </div>
  );
};

export default App;
