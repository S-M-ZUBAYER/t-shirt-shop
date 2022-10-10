import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>Brother</h1>
            <small>House: {house}</small>
            <br />
            <small>Money: {money}</small>
            <br />
            <button onClick={() => { setMoney(money + 1000) }}>Add</button>
        </div>
    );
};

export default Brother;