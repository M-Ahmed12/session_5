import React from 'react';
import MyChildren from './MyChildren';
import MyChildren2 from './MyChildren2';


const Parent = (props) => {
    return(
        
        <div>
        <MyChildren/>

        <MyChildren2/>
        </div>
    )
}

export default Parent;