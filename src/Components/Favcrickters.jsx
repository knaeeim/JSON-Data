import React from 'react';
import FavCrickter from './FavCrickter';

const Favcrickters = ({ crickters }) => {
    console.log(crickters);
    return (
        <div className='border-2 text-center'>
            <h1 className='text-4xl font-bold'>Favourite Crickters : {crickters.length}</h1>
            <div className='p-4'>
                {
                    crickters.map((crickter, idx) => {
                        return <FavCrickter key={idx} crickter={crickter}></FavCrickter>
                    })
                }
            </div>
        </div>
    );
};

export default Favcrickters;