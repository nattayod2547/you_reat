import React from 'react'
import Lefts from '../components/hamesetLefts/Lefts'
import Rights from '../components/hamesetRights/Rights'

const Home = () => {
  return (
    <>
    {/* lg:max-w-6xl mx-auto grid grid-cols-[40%_60%]   md:grid-cols-[25%,60%,15%] */}
        <div className='max-w-7xl mx-auto grid md:grid-cols-[25%,60%,13%] grid-cols-1 justify-center'>
          {/* components/hamesetLefts/Lefts */}
          <div className='md:grid hidden'> 
            <Lefts/>
          </div>
          {/* components/hamesetRights/Rights */}
          <div>
            <Rights/>
          </div>

          
          <div className='h-[900] hidden md:grid ml-2 w-full'>
          <img className='h-[900px]' src="https://placehold.co/192x900" alt="" />
          
          </div>
           
        </div>
    </>
    
  )
}

export default Home