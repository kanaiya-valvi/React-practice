import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState();

  useEffect(() => {
    setTimeout(() => {
      setCount(new Date().toLocaleTimeString());
    }, 1000);
  }, [setCount, count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
