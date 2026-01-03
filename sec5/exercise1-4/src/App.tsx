import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product1", quantity: 1 },
      { id: 2, title: "Product2", quantity: 1 },
    ],
  });

  function clickHandler() {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  }

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {cart.items.map((item) => {
          const output = `${item.id + " " + item.title + " " + item.quantity}`;
          return <li>{output}</li>;
        })}
      </ul>
      <button onClick={clickHandler}>Push Me</button>
    </div>
  );
};

export default App;
