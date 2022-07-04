import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UseEffectDemo = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      setData(response.data[0].email);
      console.log("API WAS CALLED");
    });
}); // when the state change useEffect hook re-render, empty [] not re-render if listener don't have any component passed

  return (
    <div>
      <h1>useEffectDemo</h1>
      <h1>Count: {count}</h1>
      <h4>Mail ID: {data}</h4>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}

export default UseEffectDemo;