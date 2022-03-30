import React from 'react';
import { GuestList, Adult, Children } from '../../../styles/drawer.styles';

const GuestsList = ({ incrementA,
    incrementB, decrementA,
    decrementB,
    countA, countB,
    filterGuests, setFilterGuests }) => {

    return (
        <>
            <GuestList className='guest'>
                <Adult>
                    <h6>Adults</h6>
                    <p>Ages 13 or above</p>
                    <div>
                        <button onClick={decrementA}>-</button>
                        <p>{countA}</p>
                        <button onClick={incrementA}>+</button>
                    </div>
                </Adult>
                <Children>
                    <h6>Children</h6>
                    <p>Ages 2 - 12</p>
                    <div>
                        <button onClick={decrementB}>-</button>
                        <p>{countB}</p>
                        <button onClick={incrementB}>+</button>
                    </div>
                </Children>
            </GuestList>
        </>
    )
}

export default GuestsList