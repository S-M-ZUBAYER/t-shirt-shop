import React from 'react';
import BrotherInLow from '../BrotherInLow/BrotherInLow';

const Cousin = ({ house }) => {
    return (
        <div>
            <div>
                <h1>Cousin</h1>
                <small>House: {house}</small>
                <BrotherInLow></BrotherInLow>
            </div>
        </div>

    );
};

export default Cousin;