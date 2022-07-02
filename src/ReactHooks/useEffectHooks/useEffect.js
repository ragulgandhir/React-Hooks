import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UseEffectDemo = () => {
  const [data, setData] = useState("");

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
      setData(response.data[0].email);
      console.log("API WAS CALLED");
    });
}, []);

  return (
    <div>
      <h4>useEffectDemo</h4>
      <h6>Mail ID: {data}</h6>
    </div>
  )
}

export default UseEffectDemo;