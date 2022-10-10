import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SisterInLow = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1>SisterInLow</h1>
            <small>Gift: {house}</small>
            <br></br>
            <button onClick={() => { setHouse(house + 1) }}>Increase</button>
        </div>
    );
};

export default SisterInLow;