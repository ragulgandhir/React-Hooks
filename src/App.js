import React from 'react';
import { StateTutorial } from './ReactHooks/useStateHooks/WithoutuseState';
import { UseStateTutorial } from './ReactHooks/useStateHooks/useState';
import { ReducerToturial } from './ReactHooks/useReducerHooks/useStateMultipleState';
import { UseReducer } from './ReactHooks/useReducerHooks/useReducer';
import UseEffectDemo from './ReactHooks/useEffectHooks/useEffect';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <StateTutorial />
      <UseStateTutorial />
      </div>
      <hr />
      <ReducerToturial />
      <UseReducer />
      <div>
        <UseEffectDemo />
      </div>
    </div>
  );
}

export default App;
