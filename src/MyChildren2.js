import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';


const MyChildren2 = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);

    console.log(state)
    return(
        <div>
            <h2>This is Secound Child Using counter Reducer</h2>
            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Incremnet Reducer</button>

        </div>
    )
}

export default MyChildren2;
