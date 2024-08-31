import React, { useRef } from "react";
import "./card.css";

export default function Card(props) {
  
  

  const titleRef = useRef(null);
  const descRef = useRef(null);



  return (
    
      <div
        className="card"
      >
        <img
        
         
          src={props.img}
          alt={props.title}
         
        />
        <h1 className="text-4xl font-extrabold dark:text-white px-20 py-5 " ref={titleRef}>
         {props.title}
        </h1>
        <p ref={descRef}>
          {props.info}
        </p>
      
          {props.link.map((ele)=>{
           return <a className="text-white" href={ele.value}>{ele}</a>
          })}
      

       
       
      
      </div>
  );
}