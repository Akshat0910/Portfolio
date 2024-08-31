import React, { useState , useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import EarthCanvas from './Earth';
import { styles } from './Style';
import SectionWrapper from './SectionWrapper'







function Contact() {

    const formRef = useRef();

    const [form,setform] = useState({
        name:" ",
        email:" ",
        message:" ",

    });

    const [loading,setloading] = useState(false)

    const slideIn = (direction, type, delay, duration) => {
      return {
        hidden: {
          x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
          y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
          },
        },
      };
    };

    const handleSubmit = (element)=>{

      element.preventDefault();
      setloading(true);
      emailjs.send(
        'service_zsqykfp',
        'template_st24tha',
        {
          from_name: form.name,
          to_name: 'Akshat Srivastava',
          from_email:form.email,
          to_email:'akshatsrivastava2017@gmail.com',
          message:form.message,
        },
        'vF7oqvFMymZi8uuZY'
        )
        .then(()=>{
          setloading(false);
          alert('Thank you. I will get back at you as soon as possible');

          setform({
            name:'',
            email:'',
            message:'',
          })


        },(error)=>{
          setloading(false)

          console.log(error);
          

          alert('Something Went Wrong');
        })

    }

    const handleChange = (element)=>{

      const name = element.target.name;
      const value = element.target.value;

      setform({
        ...form,[name]:value
      })


    }



  return (

    <div
    className={`flex md:flex-row flex-col overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 rounded-2xl'
    >
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-5'
      >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={3}
            name='message'
            value={form.message}
            onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
          />
        </label>

        <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary bg-violet-700'
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas />
    </motion.div>
  </div>  
      
    
  )
}

export default SectionWrapper(Contact, "contact");
