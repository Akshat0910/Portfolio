import React from 'react'
import Computer from './computer'


export default function hero() {
  return (
  

    <section className=' relative w-full h-screen mx-auto sm:px-16 px-6 '>

        
      <div className='flex space-x-9 top-[120px] max-w-7xl '>



        <div className='flex flex-col justify-center items-center mt-5 absolute'>

        <div className='w-5 h-5 rounded-full bg-[#915eff] '></div>
        <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-[#915eff] '></div>

      
        </div>

        <div>
          <h1 className='text-white text-[30px] lg:text-[70px] sm:text-[50px] lg:leading-[88px] font-bold  mt-2"'>Hi, I'm <span className='text-[#915EFF]'>Akshat</span> </h1>
          <p className='mt-2 font-medium text-[#dfd9ff] lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]'> I am a competetive programmer and<br></br> also build various applications using React framework  </p>
        </div>
      </div>


      <Computer></Computer>
      

      

    </section>

    
        

      
    
  )
}
