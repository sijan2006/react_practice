import { useState } from 'react';

// ============================================
// CHALLENGE AREA - Code here!
// ============================================

function Challenge() {
  // Your challenge code goes here
  return <div>Challenge goes here</div>;
}
function Challenge1() {

  return <div>Sijan Sapkota</div>;
}
function Challenge2() {

  return <>
  <div>Sijan Sapkota</div>
  <p>Hobby : Sleeping</p>
  </>;
}
let name ="Sijan Sapkota";
let age =19;
function Challenge3() {

  return <>
  <div> My name is {name}. I am {age} years old.</div>
  <p>Hobby : Sleeping</p>
  </>;
}


function Challenge4(){
  let birthy=2006;
  let currenty=2026;
  return <>
  <div>MY age is {currenty-birthy}</div>
  </>;
}

function Challenge5(){
  let isloggedin=false;
  return <>{
    isloggedin ? <div>WElcome</div> :<button>Login</button>
  }
  </>;
}

function Challenge6(){
  let fruits=["mango","orrange ","banana"];
  return <>
    <ul>
      {fruits.map((fruit)=>(
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  
  </>;
}

function Challenge7(){
  const Challenge71=()=>{
    alert("dont click me ");
   }
  
  return <>
  <button onClick={Challenge71}>Dont press me </button>
  
  </>;
}

function Challenge8(){
  const Challenge8_1=(name:string)=>{
    alert("Hello "+name);
  }
  return <>
  <button onClick={()=>Challenge8_1("SIjan")}>CLICK me </button>
  <button onClick={()=>Challenge8_1("Idiot")}>Dont CLICK me </button>
  </>
}
function Challenge9(){
  const [count,setcount]=useState(0);

 const Increasecount=()=>setcount(count+1)

  return<>
  <p>count: {count}</p>
  <button onClick={Increasecount}>Increase</button>
  </>
}

function Challenge10(){
  const [visible,isvisible]=useState(false);
  const toggle=()=>isvisible(!visible);
  return<>
  <button onClick={toggle}>Show</button>
  {visible ? <p>Secret</p> : <p></p>}
  </>
}
function Challenge11(){
const [text,settext]=useState("");

return<>
<input name='input' placeholder='type' onChange={(e)=>settext(e.target.value)}></input>
<p>The text is {text}</p>

</>
}








// ============================================
// DON'T TOUCH BELOW - Main App wrapper
// ============================================

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎯 React Challenges</h1>
      <hr />
      <Challenge />
      <Challenge2 />
      <Challenge3 />
      <Challenge4 />
      <Challenge7 />
      <Challenge8 />
      <Challenge9 />
      <Challenge10 />
      <Challenge11 />
    </div>
  );
}

export default App;