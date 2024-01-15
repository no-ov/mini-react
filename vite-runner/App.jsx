import React from "./core/React.js";

function SonCount() {
  return <div>Son</div>;
}

function Counter() {
  return (
    <div>
      counter<SonCount></SonCount>
    </div>
  );
}

const App = (
  <div>
    hi, mini-react
    <Counter>
      <SonCount></SonCount>
    </Counter>
  </div>
);

export default App;
