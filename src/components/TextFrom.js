import React,{useState} from 'react'

export default function TextFrom(props) {
   
    const handleUpClick =()=>{
      console.log("upper case is clicked")
      let newtext=text.toUpperCase();
      console.log(newtext);

      setText(newtext);
    }
    const handleLoClick =()=>{
      console.log("upper case is clicked")
      let newtext=text.toLowerCase();
      console.log(newtext);

      setText(newtext);
    }

    const handleOnChange =(event)=>{
      console.log("hndelonchange+")

      setText(event.target.value);
    }
    const [text, setText] = useState("enter text here");

  return (
    <>
    <div>
 
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange}   id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>convet to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>convet to toLowerCase</button>

    </div>
    <b>
    <p>{text.length} chareter and  {text.split(" ").length} words</p></b>
    </>
  )
}
