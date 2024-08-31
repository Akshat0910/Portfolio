import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {services} from '../dataa/data';
import Card from './card';







export default function About() {

  const SCard = (props)=>{

   return (

    

    <Tilt>
  
    <Card title={props.title} info={props.info} img={props.img} link={props.link}></Card>

    </Tilt>
    
    
     
     )


  }

  

 




  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    > 

      <h1 className='text-4xl font-extrabold dark:text-white px-20 py-5 '>INTRODUCTION</h1>
      <h2 className='text-white px-20 text-transparent 
      bg-clip-text bg-gradient-to-r to-emerald-600 
      from-sky-400 text-3xl font-bold'>Overview</h2>

      <p className='mb-3 text-gray-500 dark:text-gray-400 px-20 py-5 '>
        Hello! I'm Akshat Srivastava and I am thrilled to welcome to my portfolio<br></br>
        I'm a skilled and passionate software developer with experience in C++,javascript,python and expertise in framework like React ,Node.js and Three.js. 
        I'm a quick learner and build various clean functional and user-friendly websites and applications which is scalable and provide solution to real life problems. Let work together
        to bring your idea to life.<br></br>

        I'm also a competetive Programmer having 4-star on codechef and specialist in codeforces.<br></br>
        I believe in User centered approach to design and development. My goal is to create digital solution that not only meet technical requirement but also resonate with user on personal level<br></br>
        I invite you to explore my portfolio and see my work. You can contact me on the contact section or in the email akshatsrivastava2017@gmail.com or react out to my linkdin 
         <a href='https://www.linkedin.com/in/akshat-srivstava-6b0078227/' className=' font-bold '> AKSHAT SRVASTAVA</a> 
        
      </p>

      <motion.div className='mt-20 flex flex-wrap gap-10 px-20 py-5'
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{duration:1}}
        >
      
        {services.map((element)=>(
          <SCard title={element.title} 
           info={element.info}
           img={element.img}
           link={element.link}
           key={element.id}></SCard>
        ))}
        
      </motion.div>

     

       

       

    










      


    
       
    </motion.div>
  )
}
