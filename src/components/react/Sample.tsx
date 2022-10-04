import { useEffect, useState } from "react";

export default function Sample() {
  useEffect(() => {
    setCount(1);
  }, []);
  const [count, setCount] = useState(0);
  return (
    <div className="flex text-black">
      <h1 onClick={() => setCount(prev => prev + 1)}>{count}</h1>
    </div>
  );
}
