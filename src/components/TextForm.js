import React, {useState} from 'react'

export default function TextForm(props) {
    
    
    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted To UpperCase", "success");
    }
    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted To LowerCase", "success");
    }
    const handleClear = () =>{       
        let newText = ("");
        setText(newText);
        props.showAlert(" Text Cleared", "success");

    }
    const handleCopy = () =>{ 
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied", "success");
    }
    const handlePaste = ()=>{
        navigator.clipboard.readText().then(text => {
            setText(text);
            props.showAlert(" Text Pasted", "success");
        });
    }
    const handlePasteCap = () =>{
        navigator.clipboard.readText().then(text =>{
            setText(text.toUpperCase());
            props.showAlert(" Text Pasted Capatilized", "success");
        })
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert(" Removed Extra Spaces", "success");
    }
    const handleUpChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>  
        <div className="container" style={{color:props.mode === "dark"? "white" :"#0a2040"}}>
            <div className="form-group">
            <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode === "dark"? "grey" : "white", color:props.mode === "dark"? "white" : "black"}} id="exampleFormControlTextarea1" rows="9"></textarea>
                <button onClick={handleUpClick} className="btn btn-primary m-2">Switch to UpperCase</button>
                <button onClick={handleLoClick} className="btn btn-primary m-2">Switch to LowerCase</button>
                <button onClick={handleClear} className="btn btn-primary m-2">Clear</button>
                <button onClick={handleCopy} className="btn btn-primary m-2">Text Copy</button>
                <button onClick={handlePaste} className="btn btn-primary m-2">Paste Text</button>
                <button onClick={handlePasteCap} className="btn btn-primary m-2">Paste Text Capatilize</button>
                <button onClick={handleExtraSpaces} className="btn btn-primary m-2">Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container" style={{color:props.mode === "dark"? "white" : "#0a2040"}}>
            <h2>Your Text Summary</h2>
            <p>There are <b>{text.split(/\s+/).filter((word) => word !== "").length}</b> number of Words <br></br> <b>{text.length}</b> number of Characters in your Text.<br></br> It will take <b>{0.008 * text.split(" ").length}</b> Minutes to read this Text </p>            
            <h2>Your Text Preview:</h2>
            <p>{text.length>0?text:"Enter Some Text In Above Textbox To Preview It Here"}</p>
        </div>
        
    </>
  )
}
