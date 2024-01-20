import React from "./core/React.js";
// import { Button } from "@material-ui/core";
// let toggle = false
// function Counter ({num}) {
//   function One () {
//     return <div>one</div>
//   }
//   let two = <div>two</div>
//   function handleClick () {
//     toggle = !toggle
//     console.log(123)
//     React.update()
//   }
//   return (<div><div>{toggle ? <One/> : two}</div><button onClick={handleClick}>conuttttttttt</button></div>)
// }

let toggle = false;
function Counter({ num }) {
  function One() {
    return (
      <div>
        one
        <div>111</div>
        <div>222</div>
      </div>
    );
  }
  let two = <div>two</div>;
  let three = <div>three</div>;
  function handleClick() {
    toggle = !toggle;
    console.log(123);
    React.update();
  }
  return (
    <div>
      <div>
        {toggle ? <One /> : two}
        {toggle && three}
      </div>
      <button onClick={handleClick}>conuttttttttt</button>
    </div>
  );
}

function Foo() {
  const [count, setCount] = React.useState(9);
  const [bar, setBar] = React.useState("bar");

  React.useEffect(() => {
    console.log("[ 111111 ] >", "init");
  }, [count]);
  function handleClick() {
    setCount((c) => c + 1);
    setBar((pre) => pre + "bar");
    setBar("barbar");
  }
  return (
    <div>
      <h1>foo</h1>
      <button onClick={handleClick}>click</button>
      {count}
      {bar}
    </div>
  );
}
let countBar = 1;
function Bar() {
  console.log("bar rerun");
  let update = React.update();
  function handleClick() {
    countBar++;
    update();
  }
  return (
    <div>
      <h1>bar</h1>
      <button onClick={handleClick}>click</button>
      {countBar}
    </div>
  );
}

function App() {
  return (
    <div id="app">
      hi-mini <Foo></Foo> <Bar></Bar>
    </div>
  );
}
export default App;
