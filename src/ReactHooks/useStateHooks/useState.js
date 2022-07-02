import React, {useState} from 'react'

export const UseStateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputText, setInputText] = useState("Coke")

    const increment = () => {
        /*Assigned const variable not re-render (mutate) components*/
        // counter = counter + 1; 

        /*using setCounter we can re-render (mutate) components*/ 
        setCounter(counter => counter + 10); 
    }

    const decrement = () => { 
        setCounter(counter => counter -5); 
    }

    const textChange = (event) =>{
        const newValue = event.target.value;
        /*Assigned const variable not re-render (mutate) components*/
        // inputText = newValue;
        setInputText(newValue);
    }

  return (
    <div>
        <h4>useState hooks using in counter app</h4>
        {counter}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <div>
        <input placeholder='Please write something...' onChange = {textChange}/>
        {inputText}
        </div>
    </div>
  )
}
