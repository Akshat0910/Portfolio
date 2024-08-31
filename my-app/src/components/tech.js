import React from 'react'
import { technologies } from '../dataa/data'
import Balls from './Balls'



export default function Tech() {
  return (

    <div className='px-10 py-10'>

        
        <h1 className='text-4xl font-extrabold dark:text-white px-20 py-20 '>TECHNOLOGIES</h1>

            
    

     <div className='flex flex-row flex-wrap justify-center gap-20'>
        {
            technologies.map((element)=>(
                <div className='w-28 h-28'> 
                <Balls key={element.id} name={element.name} icon={element.icon}></Balls>

                </div>
            ))
        }

       




      
    </div>

    </div>
  )
}
