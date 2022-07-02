import React, {useState} from 'react'

export const ReducerToturial = () => {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true);

  return (
    <div>
        <h4>useState using multiple state to change the state action</h4>
        <h1>{count}</h1>
        <button onClick = {() => {
            setCount(count + 1);
            setShowText(!showText);

        }}
        >
        Click Me
        </button>
        {showText && <p>In the even count i'm visible, In the odd count i will be hide.</p>}
    </div>
  )
}
