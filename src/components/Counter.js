import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);

  function increment() {
    setCount((count)=>count + 1);

  }
  // function decreament(){
  //   setCount((count)=>count - 1)
  // }
  return (
    <>
     {/* <button onClick={increment}>I have been clicked {count} times</button> */}
  {/* <input type= "text" placeholder="input text" onChange={()=>console.log("hello world")} /> */}
  <button onClick={increment}>  +</button>
  {/* <button onClick={decreament}> -</button> */}

  <div>{count}</div>
    </>
  )
}

export default Counter;



