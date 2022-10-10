// import React, { createContext } from 'react';
import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./Grandpa.css"
export const RingContext = createContext('Gold Ring');
export const MoneyContext = createContext(1000)
const Grandpa = () => {
    const [house, setHouse] = useState(7);
    const [money, setMoney] = useState(1000)

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='Root'>
                    <h1>Grandpa</h1>
                    <small>House: {house}</small>
                    <div className='Root-child'>
                        <section>
                            <Father house={house}></Father>
                        </section>
                        <section>
                            <Uncle house={house}></Uncle>
                        </section>
                        <section>
                            <Aunty house={house}></Aunty>
                        </section>
                    </div>
                </div>
            </MoneyContext.Provider>

        </RingContext.Provider>

    );
};

export default Grandpa;