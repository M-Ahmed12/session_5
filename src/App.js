import React, {useState} from 'react';
import './App.css';
import counterContext from './CounterContext';
import Parent from './Parent';
function App() {
let countState = useState(0)
//let [count, setCount] = useState(20)
  return(
    <counterContext.Provider value={countState}>
    <div>
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
