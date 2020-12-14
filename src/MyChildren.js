import React, { useContext } from 'react';
import counterContext from './CounterContext';

const MyChildren = () => {

    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first Child using CounterContext</h2>

            <h4>counter value is: {counterValue}</h4>

            <button onClick={() => {counterValue[1](++counterValue[0])}}>

             Increment Context 
             
             </button>

        </div>
    )
}

export default MyChildren;