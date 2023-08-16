import './App.css';

function App() {
  return (
    <div className="App" style={{position:"absolute",width:"100vw", height:"100vh"}}>
      <div style={{width:"100px", height:"100px", left:"47%",top:"47%", backgroundColor:"white",zIndex:"1", position:"absolute"}}></div>
      <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
        <div style={{display:"flex",backgroundColor:"lightblue", width:"100%", height:"50%"}}></div>
        <div style={{display:"flex",backgroundColor:"lightgreen", width:"100%", height:"50%"}}></div>
      </div>
    </div>
  );
}

export default App;

  // <div className="App-logo" style={{zIndex:"1", position:"absolute"}}>ᴔ</div>
