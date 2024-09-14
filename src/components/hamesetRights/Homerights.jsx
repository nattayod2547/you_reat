import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi";
const Homerights = () => {
  return (
    <>
    <div className=''>

        <div className=' grid justify-center text-center '>
                <div className='mb-3'>
                    <h3 className='text-custom-blue text-[20px] font-medium tracking-wide'>Language Learned</h3>
                    <div >
                    <p className='bg-custom-gradient text-transparent bg-clip-text opacity-60 text-[18px] font-medium '>react vite node<br/>Tailwindcss css html</p>
                    </div>
                </div>
            </div>
            <div className='md:w-full mt-5'>
                    <div className='w-full grid justify-center'>
                        <h2>About Me</h2>
                    </div>
                    <div className='w-full grid justify-center mt-4 '>
                        <div className='text-center md:w-[400px] h-[500px]  w-[350px] items-center grid justify-center rounded-[50px] bg-slate-100 opacity-85'>
                            <h1 className='md:px-16  px-11'>
                            <span class="relative flex h-5 w-5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                    <span   span class=" relative inline-flex rounded-full h-5 w-5 bg-sky-500 ">
                                        <div className='grid justify-center items-center w-full animate-bounce text-cyan-50'><BiDownArrowAlt className='w-5 h-5' /></div>
                                </span>
                            </span>
                            Hello! I’m Nattayod Lamsan, and I’m currently diving into the world of web development. I’m learning React, TailwindCSS, and Node.js to build dynamic and visually appealing web applications. My journey into tech started with a background in automotive engineering, having graduated with a Vocational Certificate in Automotive Technology from Techno Lopburi. My passion for technology and problem-solving drives me to continuously learn and improve my skills. I’m excited about the opportunities ahead and am eager to apply my knowledge in creating innovative solutions.
                                </h1>
                        </div>
                    </div>
                        
            </div>

            
    </div>
            
    </>
  )
}

export default Homerights