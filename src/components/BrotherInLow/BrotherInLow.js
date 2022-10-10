import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import SisterInLow from '../SisterInLow/SisterInLow';

const BrotherInLow = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1>Cousin</h1>
            <small>Gift:{house}</small>
            <SisterInLow></SisterInLow>
            <button onClick={() => { setHouse(house - 1) }}>Decrease</button>
        </div>

    );
};

export default BrotherInLow;