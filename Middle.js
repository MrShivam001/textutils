
//import styled from 'styled-components';
//import PropTypes from 'prop-types';
import React , {useState} from 'react';

const Middle = (props) => {
    const handleup= ()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("converted to upper case","success")
    }
    const handledown= ()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("converted to lower case","success")

    }
    const handleonchange= (event)=>{
       console.log("on change")
        setText(event.target.value)
    }
    const clear= ()=>{
        let newtext=""
        setText(newtext)
        props.showAlert("all text are cleared","success")

    }
    const handleclear= ()=>{
        let newtext=text.replace(/\s+/g, ' ').trim()
        setText(newtext)
        props.showAlert("extra spaces are cleared","success")

    }

    const [text , setText]=useState("");
    return <div>
        
<div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
<h1>Enter your text below</h1>
  <label for="text" className="form-label"></label>
  <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'black':'white' , color: props.mode==='dark'?'white':'black'}}value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleup}>convert to upper case</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handledown}>convert to lower case</button>
<button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={clear}>clear all</button>
<button type="button"  disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleclear}>clear extra white space</button>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p> 
        {/*filter is higher order array method it decide which will remain and which willn't*/}
        <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter above something to preview it here"}</p>
        </div>
    </div>;
    
}



export default Middle;