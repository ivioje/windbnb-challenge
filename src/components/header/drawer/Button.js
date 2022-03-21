import React from 'react';
import { GuestList, Adult, Children } from '../../../styles/drawer.styles';

const GuestsList = ({ incrementA, incrementB, decrementA, decrementB, countA, countB }) => {

    return (
        <>
            <GuestList className='guest'>
                <Adult>
                    <h6>Adults</h6>
                    <p>Ages 13 or above</p>
                    <button onClick={decrementA}>-</button>{countA}<button onClick={incrementA}>+</button>
                </Adult>
                <Children>
                    <h6>Children</h6>
                    <p>Ages 2 - 12</p>
                    <button onClick={decrementB}>-</button>{countB}<button onClick={incrementB}>+</button>
                </Children>
            </GuestList>
        </>
    )
}

export default GuestsList