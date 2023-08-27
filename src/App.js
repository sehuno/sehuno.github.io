import './App.css';
import React, {Component, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Modal from 'react-modal';
import HorizontalScroll from 'react-scroll-horizontal'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import { BsArrowReturnRight } from 'react-icons/bs';
import { dreamsText, justiceText, perspectiveText } from './text.js';
import { Document, Page, pdfjs } from 'react-pdf';
import RingLoader from "react-spinners/RingLoader";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hw1_spec from './hw1_spec.pdf';
import hw2_spec from './hw2_spec.pdf';
import hw3_spec from './hw3_spec.pdf';
import hw4_spec from './hw4_spec.pdf';
import hw5_spec from './hw5_spec.pdf';
import project_spec from './project_spec.pdf';
import lab4 from './lab4.pdf';
import audeo from './audeo.pdf';
import rotd from './rotd.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App" style={{position:"absolute",width:"100vw", height:"100vh"}}>
      <AnimatePresence>
        { !isOpen && <div
          style={{position:"absolute", zIndex:"10", fontSize:"450px", marginLeft:"740px", marginTop:"200px", color:"white" }}
          onClick={() => setIsOpen(!isOpen)}
          exit={{opacity:0}}
          >
            ᴔ
          </div>
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

  function blogExit() {
    reset()
    setBlogClicked(false)
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
      { blogClicked && <Blog blogExit={blogExit}></Blog>}
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
  { id: 1, title:"Audeo", language:"Python", numPages:2, data: audeo, url: "https://github.com/sehuno/Audeo", excerpt:"A python webscraping and web automation script that downloads a desired song and finds all related attributes such as album name, album artwork, and lyrics in order to create a complete mp3 file."},
  { id: 2, title:"Context Free Grammar Matching", data: hw1_spec, numPages:6, language:"OCaml", url:"https://github.com/sehuno/CS131/blob/master/hw/hw1/hw1.ml", excerpt:"A matcher function that inspects a given string of terminals to find a match for a prefix that corresponds to a nonterminal symbol of a grammar, and then checks whether the match is acceptable by testing whether a given acceptor succeeds on the corresponding derivation and suffix."},
  { id: 3, title:"Edison Embedded Device", language:"C",data: lab4, numPages:5, url:"https://github.com/sehuno/CS111/blob/master/projects/lab4/lab4a.c", excerpt:"Intel Edison embedded device application that supports the use of a sensor to gather data and acts as a client using a predefined network protocol to interact with a remove server program." },
  { id: 4, title: "Grammar Filters", language:"OCaml", data: hw2_spec, numPages:7,url:"https://github.com/sehuno/CS131/blob/master/hw/hw2/hw2.ml", excerpt:"Grammar filter function that filters out blind-alleys rules, that is, grammar rules for which it is impossible to derive a string of terminal symbols."},
  { id: 5, title:"Java Synchronization", language:"Java", data: hw3_spec, numPages:4, url:"https://github.com/sehuno/CS131/tree/master/hw/hw3", excerpt:"A Java sequential-consistency-violating performance and reliability testing program that tests Null and Synchronized classes, using various values for the number of threads, number of swap transitions, size of the state array, and sum of the values in the state array, and characterizes the performance of the two classes. "},
  { id: 6, title: "Listdiffs", language:"Scheme", data: hw5_spec, numPages:3,url:"https://github.com/sehuno/CS131/blob/master/hw/hw5/hw5.ss", excerpt:"Various Scheme procedures that act upon listdiffs, which are intended to be efficient representations for sublists."},
  { id: 7, title:"Morse Code Recovery", language:"Prolog",numPages:4, data:hw4_spec, url:"https://github.com/sehuno/CS131/blob/master/hw/hw4/hw4.pl", excerpt:"Morse code recovery Prolog predicates that converts a list of 1s and 0s to the corresponding Morse characters and list of letters, interpreted according to the following Morse code table."},
  { id: 8, title:"Twisted Proxy Herd", language:"Python", numPages:4, data:project_spec, url:"https://github.com/sehuno/CS131/blob/master/hw/project/server.py", excerpt:"A python server herd application utilizing Twisted, an event-driven networking framework, which accepts TCP connections that emulate client mobile devices in order to serve location information."},
  { id: 9, title: "ROTD", language:"Python", numPages:2, data: rotd, url:"https://github.com/sehuno/ROTD", excerpt:"ROTD is a python script which provides a recap of the day by web scraping various websites."},
]

function Projects(props) {
  return(
    <div
      onClick={()=> props.projectsExit()}
      style={{position:"relative", width:"100vw", height:"100vh", margin:"auto", marginTop:"40px", overflow:"scroll", marginLeft:"250px"}}
    >
      <div style={{width:"80%", height:"90%", margin:"auto"}}>
        {projectsList.map((project) => {
          return (
            <Project project={project}></Project>
          );
        })}
      </div>
    </div>
  )
}

const projectModalStyles = {
  content: {
    top: '50%',
    left: '43.5%',
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

  const [numPages, setNumPages] = useState(null)

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
                { props.project.language === "Python" && <img src="/python-logo.png" alt="image" style={{width:"70%", marginLeft:"25px"}} />}
                { props.project.language === "OCaml" && <img src="/ocaml-logo.png" alt="image" style={{width:"80%", marginLeft:"10px"}} /> }
                { props.project.language === "C" && <img src="/c-logo.png" alt="image" style={{width:"20%", marginLeft:"67px"}} /> }
                { props.project.language === "Java" && <img src="/java-logo.png" alt="image" style={{width:"45%", marginLeft:"50px"}} /> }
                { props.project.language === "Prolog" && <img src="/prolog-logo.png" alt="image" style={{width:"70%", marginLeft:"23px"}} /> }
                { props.project.language === "Scheme" && <img src="/scheme-logo.png" alt="image" style={{width:"30%", marginLeft:"57px"}} /> }
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
          onRequestClose={(e) => handleChildElementClick(e)}
          isOpen={modalOpen}
          style={projectModalStyles}
        >
          <div style={{width:"100%", height:"100%"}}>
            <Document file={props.project.data} loading={<Loader/>}>
              {Array.apply(null, Array(props.project.numPages))
                  .map((x, i)=>i+1)
                  .map(page => <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} loading={""}/>)}
            </Document>
          </div>
        </Modal>
      </div>
    </Fade>
  )
}

function Loader() {
  return(
    <div style={{width:"100%", height:"100%", marginLeft:"450px", marginTop:"500px"}}>
      <RingLoader loading color="#000" size={60} />
    </div>
  )
}

// <Document file={{url:"https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf"}}>
//   <Page pageNumber={1}/>
// </Document>

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
              <div style={{width:"100%", height:"10%", margin:"auto"}}>
                <Carousel autoPlay={true} axis={'vertical'} infiniteLoop={true} showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} dynamicHeight={true}>
                  {textItems.map((textItem) => {
                    return (
                      <div>{textItem.text}</div>
                    );
                  })}
                </Carousel>
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

// <div style={{width:"60%", height:"10%", margin:"auto"}}>
//   i n f j
// </div>

// {textItems.map((textItem) => {
//   return (
//     <div>{textItem.text}</div>
//   );
// })}

const blogPosts = [
  {id: 1, title:"Dreams", text: dreamsText, date:"08.22.2023", img:"https://www.pixel4k.com/wp-content/uploads/2018/03/Equinox%20Sun%20Moon%20Dream%204K5032219249.jpg"},
  {id: 2, title:"Justice", text: justiceText, date:"08.22.2023", img:"https://naacp.org/sites/default/files/styles/embed_image_c/public/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg?itok=PN90k7Vi"},
  {id: 3, title:"Perspective", text: perspectiveText, date:"08.22.2023", img:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Staircase_perspective.jpg"},
]

function Blog(props) {
  return(
    <Fade delay={1000} left>
      <div style={{position:"absolute", width:"100vw", height:"100vh"}} onClick={props.blogExit}>
        <div style={{width:"90%", height:"80%", margin:"auto", marginTop:"4.5rem", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          {blogPosts.map((blogPost) => {
            return (
              <BlogPost blogPost={blogPost}></BlogPost>
            );
          })}
        </div>
      </div>
    </Fade>
  )
}

const blogModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '1400px',
    height: '1000px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    zIndex: '15',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
  }
};

function BlogPost(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleChildElementClick = (e) => {
    e.stopPropagation()
    setModalOpen(true)
  }

  return(
    <div style={{display:"flex", flexDirection:"column", width:"25%", margin:"40px",height:"350px"}}>
      <div style={{width:"100%", height:"30%", fontSize:"100px", color:"lightgrey"}}>0{props.blogPost.id}</div>
      <div style={{width:"100%", height:"70%", backgroundColor:"lightgrey", borderRadius:"10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div style={{width:"85%", height:"85%", margin:"auto", marginTop:"1.2rem", display:"flex", flexDirection:"row", backgroundColor:"white"}}>
          <div style={{width:"50%", height:"100%", position:"relative", overflow:"hidden"}}>
            <img style={{height:"100%", position:"absolute", left:"-52%"}} src={props.blogPost.img}/>
          </div>
          <div style={{width:"50%", height:"100%", display:"flex", flexDirection:"column"}}>
            <div style={{width:"100%", height:"85%", fontSize:"30px", textAlign:"center", paddingTop:"70px"}}>{props.blogPost.title}</div>
            <div onClick={(e) => handleChildElementClick(e)} style={{width:"100%", height:"15%", marginLeft:"85px", paddingBottom:"15px"}}><BsArrowReturnRight />See More</div>
          </div>
        </div>
      </div>
      <Modal
        closeTimeoutMS={600}
        onRequestClose={() => setModalOpen(false)}
        isOpen={modalOpen}
        style={blogModalStyles}
      >
        <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"row"}}>
          <div style={{width:"45%", height:"100%", position:"relative", overflow:"hidden"}}>
            <img style={{height:"100%", left:"-50%", position:"absolute"}} src={props.blogPost.img}/>
          </div>
          <div style={{width:"55%", height:"100%", whiteSpace:"pre-wrap"}}>
            <div style={{width:"90%", height:"80%", margin:"auto", marginTop:"70px", borderTop:"5px solid lightgrey", borderBottom:"5px solid lightgrey"}}>
              <div style={{width:"85%", height:"85%", margin:"auto", marginTop:"60px", display:"flex", flexDirection:"column"}}>
                <div style={{width:"100%", height:"10%", display:"flex", flexDirection:"row", borderBottom:"5px solid lightgrey"}}>
                  <Fade left><div style={{fontSize:"48px", marginRight:"10px"}}>{props.blogPost.title}</div></Fade>
                  <Fade top><div style={{fontSize:"24px"}}>{props.blogPost.date}</div></Fade>
                </div>
                <Fade bottom><div className="blog-text" style={{width:"100%", height:"90%", fontSize:"18px", overflow:"scroll", marginTop:"40px"}}>{props.blogPost.text}</div></Fade>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App;
