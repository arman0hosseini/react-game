import { produce } from "immer";
import { useState } from "react";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 1, title: "Bug 1", fixed: false },
  ]);

  function handleClick() {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  }

  return <div></div>;
};

export default App;
