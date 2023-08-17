import './App.css';
import React, {Component, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Modal from 'react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App" style={{position:"absolute",width:"100vw", height:"100vh"}}>
      <AnimatePresence>
        { !isOpen && <motion.div
          style={{borderRadius: "50%",width:"100px", height:"100px", left:"47%",top:"47%", backgroundColor:"white",zIndex:"1", position:"absolute"}}
          onClick={() => setIsOpen(!isOpen)}
          exit={{ opacity: 0 }}
          >
          </motion.div>
        }
      </AnimatePresence>
      <div onClick={() => setIsOpen(false)} style={{position:"absolute",display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
        <AnimatePresence>
          { !isOpen && <motion.div
            style={{display:"flex",backgroundColor:"lightgrey", width:"100%", height:"50%"}}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
          </motion.div> }
        </AnimatePresence>
        <AnimatePresence>
          { !isOpen && <motion.div
            style={{display:"flex",backgroundColor:"lightgrey", width:"100%", height:"50%"}}
            exit={{ y: "+100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
          </motion.div> }
        </AnimatePresence>
      </div>
      {isOpen && <Menu></Menu>}
    </div>
  );
}

const menuList = [
  { id: 1, title:"About Me"},
  { id: 2, title:"Blog"},
  { id: 3, title:"Projects"},
  { id: 4, title:"Photography"},
]

function Menu() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true)
  const [blogOpen, setBlogOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [photographyOpen, setPhotographyOpen] = useState(true)

  function aboutMeClicked() {
    setAboutMeOpen(true)
    setBlogOpen(false)
    setProjectsOpen(false)
    setPhotographyOpen(false)
  }

  function blogClicked() {
    setAboutMeOpen(false)
    setBlogOpen(true)
    setProjectsOpen(false)
    setPhotographyOpen(false)
  }

  function projectsClicked() {
    setAboutMeOpen(false)
    setBlogOpen(false)
    setProjectsOpen(true)
    setPhotographyOpen(false)
  }

  function photographyClicked() {
    setAboutMeOpen(false)
    setBlogOpen(false)
    setProjectsOpen(false)
    setPhotographyOpen(false)
  }

  return(
    <div
      style={{position:"absolute", width:"30rem",height:"25rem", margin:"auto", left:"40%", top:"10%"}}
    >
      <AnimatePresence>
        { aboutMeOpen &&
          <motion.div
            initial={{opacity:0, translateX:-500}}
            animate={{opacity:1, translateX:0}}
            transition={{duration: 0.8, delay: 0.1}}
            onClick={photographyClicked}
            exit={{ opacity: 0 }}
          >
            <p style={{fontSize:"4.5rem"}}>About Me</p>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        { blogOpen &&
          <motion.div
            initial={{opacity:0, translateX:-500}}
            animate={{opacity:1, translateX:0}}
            transition={{duration: 0.8, delay: 0.2 }}
            onClick={photographyClicked}
            exit={{ opacity: 0 }}
          >
            <p style={{fontSize:"4.5rem"}}>Blog</p>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        { projectsOpen &&
          <motion.div
            initial={{opacity:0, translateX:-500}}
            animate={{opacity:1, translateX:0}}
            transition={{duration: 0.8, delay: 0.3 }}
            onClick={photographyClicked}
            exit={{ opacity: 0 }}
          >
            <p style={{fontSize:"4.5rem"}}>Projects</p>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        { photographyOpen &&
          <motion.div
            initial={{opacity:0, translateX:-500}}
            animate={{opacity:1, translateX:0}}
            transition={{duration: 0.8, delay: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={photographyClicked}
          >
            <p style={{fontSize:"4.5rem"}}>Photography</p>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

function Photo() {
  return(
    <div></div>
  )
}

export default App;
