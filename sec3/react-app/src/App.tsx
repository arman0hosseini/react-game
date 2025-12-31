import Alert from "./components/Alert.js";
import ListGroup from "./components/ListGroup.js";
function App() {
  const cars = ["Audi", "BMW", "Benz", "Lamborgini"];
  return (
    <ListGroup
      items={cars}
      onSelectItem={(item) => console.log(item)}
      heading="Car Brands"
      key={"car"}
    ></ListGroup>
  );
}

export default App;
