import './App.css';
import React, {Component, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Modal from 'react-modal';
import HorizontalScroll from 'react-scroll-horizontal'

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

const photoModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '1200px',
    height: '800px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    zIndex: '10',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  }
};

const projects = [
  {}
]

function Menu() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true)
  const [blogOpen, setBlogOpen] = useState(true)
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [photographyOpen, setPhotographyOpen] = useState(true)

  const [aboutMeClicked, setAboutMeClicked] = useState(false)
  const [blogClicked, setBlogClicked] = useState(false)
  const [projectClicked, setProjectsClicked] = useState(false)

  const [photographyModalOpen, setPhotographyModalOpen] = useState(false)

  function aboutMe() {
    hideMenu()
    setAboutMeClicked(true)
  }

  function blog() {
    hideMenu()
    setBlogClicked(true)
  }

  function projects() {
    hideMenu()
    setProjectsClicked(true)
  }

  function hideMenu() {
    setAboutMeOpen(false)
    setBlogOpen(false)
    setProjectsOpen(false)
    setPhotographyOpen(false)
  }

  function reset() {
    setAboutMeOpen(true)
    setBlogOpen(true)
    setProjectsOpen(true)
    setPhotographyOpen(true)
  }

  function photographyClicked() {
    hideMenu()
    setPhotographyModalOpen(true)
  }

  function photoModalExit() {
    reset()
    setPhotographyModalOpen(false)
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
            onClick={aboutMe}
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
            onClick={blog}
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
            onClick={projects}
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
      <Modal
        closeTimeoutMS={600}
        onRequestClose={() => photoModalExit()}
        isOpen={photographyModalOpen}
        style={photoModalStyles}
      >
        <Photo></Photo>
      </Modal>
    </div>
  )
}

function Photo() {
  return(
    <HorizontalScroll>
      <img src="/i1.jpg" alt="image" style={{marginRight:"20px"}} />
      <img src="/i2.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i3.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i4.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i5.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i6.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i7.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i8.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i9.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i10.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i11.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i12.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i13.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i14.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i15.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i16.jpg" alt="image" style={{marginRight:"20px"}}/>
      <img src="/i17.jpg" alt="image"/>
    </HorizontalScroll>
  )
}

export default App;
