//rfc is nothing but react functional component

import React,{useState} from 'react';



export default function TextForm(props) {
  
    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLowClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
        // console.log("text changed");
    }

    const handleDelete=()=>{
        setText("");
        props.showAlert("Deleted the content","warning");
    }

    const [text, setText]=useState("");
    // setText("New text");
    // console.log(text);

    return (
    <>
    <div className='container my-4'  style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1>{props.heading}</h1>
      
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'grey'}}></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Upper Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Lower Case</button>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleDelete}>Delete Content</button>

    </div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'grey'}} >
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
</div>
<div className="container" style={{color: props.mode==='dark'?'white':'grey'}}>
<h2>Preview</h2>
<p>
    {text.length>0?text:"Nothing to Preview!"}
</p>
</div>
    </>
  )
}
