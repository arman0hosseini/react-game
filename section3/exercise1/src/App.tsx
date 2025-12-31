import Button from "./components/button.js";
import Alert from "./components/alert.js";

const onClickFunction = () => {
  return Alert;
};

function App() {
  return (
    <>
      <div>
        <Button
          onClick={onClickFunction}
          color="danger"
          text={"Push Me"}
        ></Button>
      </div>
    </>
  );
}

export default App;
