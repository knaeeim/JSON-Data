import React from 'react';

const Crickter = ({ crickter, handleAddFavCrickters }) => {
    const {name, runs, centuries, fifties, team} = crickter;
    return (
        <div className='border-2 border-green-500 rounded-xl p-5 mb-10 text-center'>
            <h1 className='font-bold text-2xl'>Name : {name}</h1>
            <p className='font-semibold text-xl'>Runs : {runs}</p>
            <p className='font-semibold text-2xl'>Team : {team}</p>
            <p className='font-semibold text-2xl'>Fifties : {fifties}</p>
            <p className='font-semibold text-2xl'>Centuries : {centuries}</p>
            <button onClick={() => handleAddFavCrickters(crickter)} className='px-8 py-3 bg-green-600 text-white my-2 rounded-xl font-bold'>Add to Fav Crickter List</button>
        </div>
    );
};

export default Crickter;