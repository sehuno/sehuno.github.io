import './App.css';
import React, {Component, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Modal from 'react-modal';
import HorizontalScroll from 'react-scroll-horizontal'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

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
      <div style={{position:"absolute",display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
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
  const [projectsClicked, setProjectsClicked] = useState(false)

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

  function projectsExit() {
    reset()
    setProjectsClicked(false)
  }

  function aboutMeExit() {
    reset()
    setAboutMeClicked(false)
  }

  return(
    <div style={{width:"100%", height:"100%"}}>
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
      { projectsClicked && <Projects projectsExit={projectsExit}></Projects> }
      { aboutMeClicked && <AboutMe aboutMeExit={aboutMeExit}></AboutMe>}
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

const projectsList = [
  { id: 1, title:"Audeo", language:"Python", url: "https://github.com/sehuno/Audeo", excerpt:"A python webscraping and web automation script that downloads a desired song and finds all related attributes such as album name, album artwork, and lyrics in order to create a complete mp3 file."},
  { id: 2, title: "ROTD", language:"Python", url:"https://github.com/sehuno/ROTD", excerpt:"ROTD is a python script which provides a recap of the day by web scraping various websites."},
  { id: 3, title:"Context Free Grammar Matching", language:"OCaml", url:"https://github.com/sehuno/CS131/blob/master/hw/hw1/hw1_spec.pdf", excerpt:"A matcher function that inspects a given string of terminals to find a match for a prefix that corresponds to a nonterminal symbol of a grammar, and then checks whether the match is acceptable by testing whether a given acceptor succeeds on the corresponding derivation and suffix."},
  { id: 4, title:"Edison Embedded Device", language:"C", url:"https://github.com/sehuno/CS111/blob/master/projects/lab4/lab4.pdf", excerpt:"Intel Edison embedded device application that supports the use of a sensor to gather data and acts as a client using a predefined network protocol to interact with a remove server program." },
  { id: 5, title: "Grammar Filters", language:"OCaml", url:"https://github.com/sehuno/CS131/blob/master/hw/hw2/hw2.ml", excerpt:"Grammar filter function that filters out blind-alleys rules, that is, grammar rules for which it is impossible to derive a string of terminal symbols."},
  { id: 6, title:"Java Synchronization", language:"Java", url:"https://github.com/sehuno/CS131/blob/master/hw/hw3/hw3_spec.pdf", excerpt:"A Java sequential-consistency-violating performance and reliability testing program that tests Null and Synchronized classes, using various values for the number of threads, number of swap transitions, size of the state array, and sum of the values in the state array, and characterizes the performance of the two classes. "},
  { id: 7, title: "Listdiffs", language:"Scheme", url:"https://github.com/sehuno/CS131/blob/master/hw/hw5/hw5_spec.pdf", excerpt:"Various Scheme procedures that act upon listdiffs, which are intended to be efficient representations for sublists."},
  { id: 8, title:"Morse Code Recovery", language:"Prolog", url:"https://github.com/sehuno/CS131/blob/master/hw/hw4/hw4_spec.pdf", excerpt:"Morse code recovery Prolog predicates that converts a list of 1s and 0s to the corresponding Morse characters and list of letters, interpreted according to the following Morse code table."},
  { id: 9, title:"Twisted Proxy Herd", language:"Python", url:"https://github.com/sehuno/CS131/blob/master/hw/project/project_spec.pdf", excerpt:"A python server herd application utilizing Twisted, an event-driven networking framework, which accepts TCP connections that emulate client mobile devices in order to serve location information."},
]

function Projects(props) {
  return(
    <motion.div
      onClick={()=> props.projectsExit()}
      initial={{opacity:0 }}
      animate={{opacity:1 }}
      transition={{duration: 3}}
      style={{position:"relative", width:"1200px", height:"1000px", margin:"auto", marginTop:"40px", overflow:"scroll"}}
    >
      {projectsList.map((project) => {
        return (
          <Project project={project}></Project>
        );
      })}
    </motion.div>
  )
}

const projectModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '1000px',
    height: '1200px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    zIndex: '15',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  }
};

function Project(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleChildElementClick = (e) => {
    e.stopPropagation()
    setModalOpen(!modalOpen)
  }


  return(
    <Fade bottom delay={1000}>
      <div
        style={{width:"1000px", height:"250px", marginBottom:"50px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius:"10px"}}
      >
        <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
          <div style={{display:"flex", width:"100%", height:"25%", backgroundColor:"lightgrey"}}>
            <div style={{display:"flex", width:"70%", height:"100%", backgroundColor:"#c8c9ac"}}
              onClick={(e) => handleChildElementClick(e)}
            >
              <p style={{fontSize:"36px", position:"absolute", marginTop:"10px", marginLeft:"10px", color:"#787867"}}>{props.project.title}</p>
            </div>
            <div style={{display:"flex", width:"20%", height:"100%", backgroundColor:"#E0E0E0"}}>
              <div style={{position:"relative", margin:"auto", padding:"10px", borderRadius:"20px"}}>
                { props.project.language === "Python" && <img src="/python-logo.png" alt="image" style={{width:"70%"}} />}
                { props.project.language === "OCaml" && <img src="/ocaml-logo.png" alt="image" style={{width:"80%"}} /> }
                { props.project.language === "C" && <img src="/c-logo.png" alt="image" style={{width:"20%"}} /> }
                { props.project.language === "Java" && <img src="/java-logo.png" alt="image" style={{width:"45%"}} /> }
                { props.project.language === "Prolog" && <img src="/prolog-logo.png" alt="image" style={{width:"70%"}} /> }
                { props.project.language === "Scheme" && <img src="/scheme-logo.png" alt="image" style={{width:"30%"}} /> }
              </div>
            </div>
            <div style={{display:"flex", width:"10%", height:"100%", backgroundColor:"white"}}>
              <a href={props.project.url}><img src="/github-logo.png" alt="image" style={{width:"100%"}} /></a>
            </div>
          </div>
          <div style={{width:"100%", height:"75%", backgroundColor:"#808080"}}
            onClick={(e) => handleChildElementClick(e)}
          >
            <p style={{fontSize:"24px", padding:"20px", color:"white"}}>{props.project.excerpt}</p>
          </div>
        </div>
        <Modal
          closeTimeoutMS={600}
          onRequestClose={() => setModalOpen(false)}
          isOpen={modalOpen}
          style={projectModalStyles}
        >
        </Modal>
      </div>
    </Fade>
  )
}

const textItems = [
  {id: 0, text:"coding is cool"},
  {id: 1, text:"Proverbs 16:9, 23:17"},
  {id: 2 , text:"i enjoy thrifting"},
  {id: 3, text:"coffee & cigs"},
  {id: 4, text:"lover of chopin's nocturnes"},
  {id: 5, text: "would like to work in cybersecurity"},
  {id: 6, text:"or even pursue a career in webdev"},
  {id: 7, text:"i sometimes make music on ableton"},
  {id: 8, text:"i n f j"}
]

function AboutMe(props) {
  return(
    <div style={{position:"absolute", width:"100vw", height:"100vh"}}
          onClick={props.aboutMeExit}
    >
      <Fade delay={1000}>
        <div style={{width:"100%", height:"100%",overflow:"hidden"}}>
          <img src="/jerry-wang-Hqf58s2C1lg-unsplash.jpeg" style={{width:"100%",opacity:"0.8"}}/>
        </div>
      </Fade>
      <Zoom delay={1500} left>
        <div style={{position:"absolute", display:"flex", flexDirection:"row", margin:"auto", width:"60%", height:"70%", top:"15%", left:"20%"}}>
          <div style={{width:"40%", height:"100%", display:"flex", flexDirection:"column", color:"white", background: "linear-gradient(180deg, rgba(225,226,38,1) 0%, rgba(213,100,25,1) 100%)"}}>
            <Pulse left delay={2250}><div style={{height:"10%",width:"90%", fontSize:"48px", margin:"auto", marginTop:"10px"}}>eric séhun oh</div></Pulse>
            <Zoom left delay={2300} duration={1000}>
              <div style={{height:"20%", width:"100%", marginTop:"30px"}}>
                <p style={{width:"70%", margin:"auto", textAlign:"center", fontSize:"20px"}}>Senior Full Stack Developer</p>
                <p style={{width:"70%", margin:"auto", textAlign:"center", fontSize:"20px", marginTop:"10px"}}>San José, CA</p>
              </div>
            </Zoom>
            <Fade left delay={3000}>
              <div style={{width:"60%", height:"10%", margin:"auto"}}>
                i n f j
              </div>
            </Fade>
            <Fade bottom delay={3500}><div style={{fontSize:"18px", width:"80%", height:"35%", margin:"auto"}}>Hello! My name is Sehun, pronounced say-hoon, eric oh, a college student currently studying computer science. In my free time, I enjoy coding, taking photos, dancing, and browsing the endless stream of cat photos, otherwise known as the internet. </div></Fade>
            <Fade left cascade delay={4000}><div style={{width:"100%", height:"25%", display:"flex", flexDirection:"column"}}>
              <div style={{width:"100%", height:"50%", display:"flex", flexDirection:"row"}}>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://www.linkedin.com/in/sehun-eric-oh-b400ba34/"><img src="/linkedin-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://www.instagram.com/atredama"><img src="/instagram-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://www.flickr.com/ohfasho"><img src="/flickr-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
              </div>
              <div style={{width:"100%", height:"50%", display:"flex", flexDirection:"row"}}>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://atredama.tumblr.com/"><img src="/tumblr-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://soundcloud.com/atredama"><img src="/soundcloud-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
                <div style={{width:"33.3333%", height:"100%", marginLeft:"15px"}}>
                  <a href="https://github.com/sehuno"><img src="/github-small-logo.png" alt="image" style={{height:"60%", marginLeft:"10%", filter: "brightness(0) invert(1)"}} /></a>
                </div>
              </div>
              </div>
            </Fade>
          </div>
          <div style={{width:"100%", height:"100%"}}>
            <img src="/profile.jpg" alt="image" style={{height:"100%"}} />
          </div>
        </div>
      </Zoom>
    </div>
  )
}

export default App;
