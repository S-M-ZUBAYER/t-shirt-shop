import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h1>Father</h1>
            <small>House: {house}</small>
            <div >
                <div className='Root-child'>
                    <section>
                        <Brother house={house}></Brother>
                    </section>
                    <section>
                        <Myself house={house}></Myself>
                    </section>
                    <section>
                        <Sister house={house}></Sister>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Father;