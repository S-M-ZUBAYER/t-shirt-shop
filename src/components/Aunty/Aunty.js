import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ house }) => {
    return (
        <div>
            <h1>Aunty</h1>
            <small>House: {house}</small>
            <div >
                <div className='Root-child'>
                    <section>
                        <Cousin house={house}></Cousin>
                    </section>
                    <section>
                        <Cousin house={house}></Cousin>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default Aunty;