import React, { useEffect, useState } from 'react';
import Crickter from './Crickter';



const Crickters = ({handleAddFavCrickters}) => {
    
    const [crickters, setCrickters] = useState([]);
    
    useEffect(()=> {
        const cricktersDataFetching = () => {
            fetch("crickters.json")
                .then((res) => res.json())
                .then((data) => setCrickters(data))
        }
        cricktersDataFetching()
    }, [])

    return (
        <div>
            {
                crickters.map((crickter, idx) => <Crickter key={idx} handleAddFavCrickters={handleAddFavCrickters} crickter={crickter}></Crickter>)
            }
        </div>
    );
};

export default Crickters;