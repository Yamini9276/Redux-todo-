import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
