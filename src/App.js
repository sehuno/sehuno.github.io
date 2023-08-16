import './App.css';
import React, {Component, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Modal from 'react-modal';

const rootTopVariants = {
  open: { opacity: 0, y: "-100%"} ,
  closed: { opacity: 1 },
}

const rootBottomVariants = {
  open: { opacity: 0, y: "+100%"} ,
  closed: { opacity: 1 },
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App" style={{position:"absolute",width:"100vw", height:"100vh"}}>
      <div
        style={{borderRadius: "50%",width:"100px", height:"100px", left:"47%",top:"47%", backgroundColor:"white",zIndex:"1", position:"absolute"}}
        onClick={() => setIsOpen(true)}>
      </div>
      <div style={{position:"absolute",display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
        <AnimatePresence>
        { !isOpen && <motion.div
          style={{display:"flex",backgroundColor:"lightblue", width:"100%", height:"50%"}}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 2 }}
        >
        </motion.div> }
        </AnimatePresence>
        <AnimatePresence>
        { !isOpen && <motion.div
          style={{display:"flex",backgroundColor:"lightgreen", width:"100%", height:"50%"}}
          exit={{ y: "+100%", opacity: 0 }}
          transition={{ duration: 2 }}
        >
        </motion.div> }
        </AnimatePresence>
      </div>
      {isOpen && <Menu></Menu>}
    </div>
  );
}

function Menu() {
  return(
    <div style={{position:"absolute"}}>
      <ul>
        <li>About Me</li>
        <li>Blog</li>
        <li>Projects</li>
        <li>Photography</li>
      </ul>
    </div>
  )
}
function Photo() {
  return(
    <div></div>
  )
}

export default App;
