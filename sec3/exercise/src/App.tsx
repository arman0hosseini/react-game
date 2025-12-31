import Button from "./components/button";
import Alert from "./components/alert";
import { useState } from "react";

function App() {
  const [buttonState, setButtonState] = useState(false);

  return (
    <>
      {buttonState && (
        <Alert onClose={() => setButtonState(false)}>Hello There!</Alert>
      )}
      <Button onClick={() => setButtonState(true)}>Push Me</Button>
    </>
  );
}

export default App;
