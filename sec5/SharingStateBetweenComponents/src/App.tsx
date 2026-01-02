import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  const [productItems, setProductItems] = useState(["Product1", "Product2"]);

  return (
    <>
      <NavBar cartItemsCount={productItems.length}></NavBar>
      <Cart cartItems={productItems} onClear={() => setProductItems([])}></Cart>
    </>
  );
};

export default App;
