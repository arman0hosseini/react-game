import { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  // AfterRender
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
