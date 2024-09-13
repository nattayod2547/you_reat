import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { LuBarChart3 } from "react-icons/lu";
const MainNavbar = () => {
  const [isOpen, setisOpen] = useState(false)

  const botckl = ()=>{
    setisOpen(!isOpen)
  }
 




  return (
    
    <>
    <nav className='w-full bg-white'>
      
    <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>


        <div className='md:grid  mx-auto max-w-7xl grid-cols-[40%,60%] h-16 z-50 items-center '>
            <div className='ml-4 h-16  grid grid-cols-[80%,20%] md:grid items-center'>
                <h1>Mr.Nattayod</h1>
                <div className='md:hidden' onClick={botckl}><LuBarChart3 /></div>
            </div>
            <div className="hidden  md:flex gap-2">
                <p><Link className='m-4  hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/'}>home</Link></p>
                <p><Link className='m-4 hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/prodcut'}>Skills &amp</Link></p>
                <p><Link className='m-4 hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/portfolio'}>Portfolio</Link></p>
                <p><Link className='m-4 hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/contact'}>Contact</Link></p>
            </div>
              {/*  className="grid fixed top-16 left-0 w-full justify-center z-10 h-40  bg-white md:hidden" */}
          {isOpen ? (
                <div className="grid sticky top-16 left-0 w-full justify-center z-10 h-40  bg-white md:hidden">
                  <div className='w-96 text-center'>
                    <p className='py-2 border-b-[1px] border-fuchsia-400 transition '><Link className=' hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/'}>home</Link></p>
                    <p className='py-2 border-b-[1px] border-fuchsia-400 transition '><Link className=' hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/prodcut'}>Skills &amp</Link></p>
                    <p className='py-2 border-b-[1px] border-fuchsia-400 transition '><Link className=' hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/portfolio'}>Portfolio</Link></p>
                    <p className='py-2 border-b-[1px] border-fuchsia-400 transition '><Link className=' hover:text-fuchsia-600 transition border-b-2 border-white hover:border-fuchsia-600 ' to={'/contact'}>Contact</Link></p>
                  </div>
                
            </div>
          ): null}
            
        </div>
        
    </nav>
    </>
  )
}

export default MainNavbar