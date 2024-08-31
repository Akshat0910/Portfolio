import './App.css';
import Navbar from '../src/components/navbar';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import { Route,Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Hero from '../src/components/hero.js'
import Star from './components/stars';
import Tech from './components/tech';
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    document.body.style.backgroundColor = "black";

    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",  // Ensure content fits within the viewport
    backgroundColor: "black",
    overflow: "hidden",
  };


  return (

    <BrowserRouter>
   
    
      <Navbar></Navbar>
      




         <Routes>
            <Route path="/" element={<div style={containerStyle} className='pt-16 mt-14'><Hero></Hero></div>} />
            <Route path="/About" element={<div className='pt-16 mt-14'><About /><Tech></Tech></div>} />
            <Route path="/Contact" element={<div className='relative z-0 pt-16'> <Contact /> <Star/></div>} />
         </Routes>




    </BrowserRouter>
    
      

        
  );
}

export default App;
