import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Uncle</h1>
            <small>House: {house}</small>
            <div >
                <div className='Root-child'>
                    <section>
                        <Cousin house={house}></Cousin>
                    </section>
                    <section>
                        <Cousin house={money}></Cousin>
                        <br />
                        <button onClick={() => { setMoney(money + 500) }}>Add</button>
                    </section>

                </div>

            </div>
        </div >
    );
};

export default Uncle;