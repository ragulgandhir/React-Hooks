import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "Increment":
            return {count: state.count+1, showText: state.showText};
        case "toggleShowText":
            return {count: state.count, showText: !state.showText};
        default:
            return state;
    }
};

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
   

  return (
    <div>
        <h4>useReducer manage multiple state and state actions single declaration.</h4>
        <h1>{state.count}</h1>
        <button onClick = {() => {
            dispatch({type: "Increment"});
            dispatch({type: "toggleShowText"});
        }}
        >
        Click Me
        </button>
        {state.showText && <p>In the even count i'm visible, In the odd count i will be hide.</p>}
    </div>
  )
}
