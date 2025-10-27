import React from 'react';

const FavCrickter = ({crickter}) => {
    return (
        <div>
            <div className='border-2'>
                <p>Name : {crickter.name}</p>
                <p>Runs : {crickter.runs}</p>
                <p>fifties : {crickter.fifties}</p>
                <p>Centuries : {crickter.centuries}</p>
            </div>
        </div>
    );
};

export default FavCrickter;