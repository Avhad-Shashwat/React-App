import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
import React,{useState} from 'react';
import Alert from './Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './About';

function App() {

  const [mode, setMode]= useState('light');

  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
//set Timeout to make alert disappear
    setTimeout(()=>{
      setAlert(null);
    },2000)

  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#0d0833';
      showAlert("Dark Mode Turned on","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Turned on","success")
    }
  }

  //Two Types of Coding
  //Functional Based: React Hooks-use state, use effect etc
  //class Based Component it is a bit difficult 

  //props: Properties

  // let greet="Good Morning";
  return (
    //We have imported the <Navbar/> Component from the Navbar.js file 
  <>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar title="Desi QNA" link="Link" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <TextForm showAlert={showAlert} heading="Text Editor" mode={mode}/>
          
          </>
          }  
          />
        <Route exact path='/About' element={
          <>
           <Navbar title="Desi QNA" link="Link" mode={mode} toggleMode={toggleMode}/>
           <Alert alert={alert}/>
          <About mode={mode}/>

          </>
          }
           />
      </Routes>
    </BrowserRouter>

  {/* <Navbar title="Desi QNA" link="Link" mode={mode} toggleMode={toggleMode}/> */}
  {/* <Alert alert={alert}/>
  <TextForm showAlert={showAlert} heading="Text Editor" mode={mode}/> */}
  {/* <About/> */}
  </>
  );
}

export default App;
