import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });
  function newTopping() {
    setPizza({ ...pizza, topping: ["Cheese"] });
  }
  return (
    <div>
      <h2>Topping</h2>
      <ul>
        {pizza.topping.map((topping) => (
          <li>{topping}</li>
        ))}
      </ul>
      <button onClick={newTopping}>Push Me</button>
    </div>
  );
};

export default App;
