import React from "./core/React.js";

function SonCount() {
  return <div>Son</div>;
}

let count = 10;
function Counter({ num }) {
  function handleClick() {
    console.log("[ click ] >");
    count++;
    React.update();
  }
  return (
    <div>
      count:{count}
      <SonCount></SonCount>
      <button onClick={handleClick}>点击</button>
    </div>
  );
}

const App = (
  <div>
    hi, mini-react
    <Counter></Counter>
  </div>
);

export default App;
