import React from 'react'

export const StateTutorial = () => {
    let counter = 0;

    const increment = () => {
        counter = counter +1;
        console.log(counter);
    }
  return (
    <div>
        <h4> Without useState Counter app</h4>
        {counter}
        <button onClick={increment}>increment</button>
    </div>
  )
}
