import React, { useState } from 'react'
import logo from '../pictures/logo.png';
import menu from '../pictures/menu.png';
import close from '../pictures/close.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [active,setactive] = useState("");
  const [toggle,settoggle] = useState(false);
  

  

  return (
    <>

    <nav className='fixed w-full top-0 left-0 h-16 sm:px-16 px-6 z-50 bg-slate-900' >
      <div className='flex flex-row justify-between items-center ' >

        <Link to='/' className='flex flex-row items-center'>

          <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-3xl'></img>
         

        
          <p className='text-[15px] text-white font-bold cursor-pointer'>Akshat <span className='hidden sm:block'> Srivastava </span></p>
      

        
        </Link>

        
        <ul className=' hidden sm:flex justify-between items-center space-x-4'>
            <li className={`${active==="Home"? "text-white": "text-blue-600"} cursor-pointer font-medium`} onClick={()=>setactive("Home")}><Link to='/'>Home</Link></li>
            <li className={`${active==="About"? "text-white": "text-blue-600"} cursor-pointer font-medium`} onClick={()=>setactive("About")}> <Link to='/about'>About</Link></li>
            <li className={`${active==="Contact"? "text-white": "text-blue-600"} cursor-pointer font-medium`} onClick={()=>setactive("Contact")}><Link to='/contact'>Contact</Link></li>
            
       </ul>

       
       <div className='sm:hidden flex flex-1 justify-end items-center'>

        <img src={toggle? close : menu } alt='menu' className='w-10 h-10 object-contain' onClick={()=>{settoggle(!toggle)}}></img>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-800 absolute top-9 right-0 my-2 mx-4 z-10 rounded-3xl`}>

        <ul className='justify-end'>
        <li className={`${active==="Home"? "text-white": "text-blue-600"} cursor-pointer font-medium font-poppins`} onClick={()=>setactive("Home")}> <Link to='/'>Home</Link></li>
            <li className={`${active==="About"? "text-white": "text-blue-600"} cursor-pointer font-medium font-poppins`} onClick={()=>setactive("About")}> <Link to='/about'>About</Link></li>
            <li className={`${active==="Contact"? "text-white": "text-blue-600"} cursor-pointer font-medium`} onClick={()=>setactive("Contact")}><Link to='/contact'>Contact</Link></li>
       </ul>



        
           


        </div>

        


       </div>


      


        




      </div>

    

      
    </nav>

    

 
    


    </>
  )
}
