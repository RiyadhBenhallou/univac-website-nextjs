"use client";

import { useState } from "react";

export default function Page() {
  const [x, setX] = useState(5);
  return (
    <div>
      <button onClick={() => setX(x + 1)}>+</button>
      {x}
      <input type="text" />
      <button>click</button>
    </div>
  );
}
