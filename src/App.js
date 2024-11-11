import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React,{ useState } from'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  } 
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#0a2040";
      showAlert(" Dark Mode Enabled", "success");
      // title chamkane ke liye // title flash
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 1500);
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode Enabled", "success");
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert}/>
          <div className="container my-5">
              {/* <Routes> */}
                {/* <Route exact path="/about" element={<About />} /> */}
                {/* <Route exact path="/" element={
                 } /> */}
                  <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode} />

              {/* </Routes> */}
          </div>
    {/* </Router> */}

    </>
  );
}

export default App;
