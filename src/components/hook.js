import React, { useState } from 'react';

// vd react hook useState
function Hook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>React Hook</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );
}

export default Hook