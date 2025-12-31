import Alert from "./components/Alert.js";
// by default if we don't supply a file and we refrence the compiler will look for a file called index
import ListGroup from "./components/ListGroup/index.js";

function App() {
  const items = ["Kir", "Kos", "Mame"];

  return (
    <ListGroup
      onSelectItem={(kir: string) => console.log(kir)}
      items={items}
      heading="Hame Khooba"
    ></ListGroup>
  );
}

export default App;
