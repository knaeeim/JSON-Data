import { useState } from 'react'
import './App.css'
import Crickters from './Components/Crickters'
import Favcrickters from './Components/Favcrickters'

function App() {

  const [crickters, setCrickters] = useState([]);

  const handleAddFavCrickters = (crcikter) => {
    setCrickters(prev => [...prev, crcikter])
  }

  console.log(crickters);

  return (
    <div className='m-10 flex justify-center gap-5'>
      <div className='w-[70%]'>
        <Crickters handleAddFavCrickters={handleAddFavCrickters}></Crickters>
      </div>
      <div className='w-[30%]'>
        <Favcrickters crickters={crickters}></Favcrickters>
      </div>
    </div>
  )
}

export default App
