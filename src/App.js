import './App.css';
import { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify'
import { LC, NC, SC, UC } from './data/passChar';

function App() {

  let [upperCase,setUpperCase]=useState(false);
  let [lowerCase,setLowerCase]=useState(false);
  let [specialCase,setSpecialCase]=useState(false);
  let [numberCase,setNumberCase]=useState(false);
  let [passLen,setpassLen]=useState(10);
  let [Display,setDisplay]=useState('');

  let createpassword=()=>{
    if(upperCase || lowerCase || specialCase || numberCase)
    {
      let finalSet='';
      let charSet='';
      if(upperCase) charSet+=UC;
      if(lowerCase) charSet+=LC;
      if(specialCase) charSet+=SC;
      if(numberCase) charSet+=NC;
      for(let i=0;i<passLen;i++)
      {
        finalSet+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setDisplay(finalSet)
    }
    else{
      toast.error("Please select atleast one checkbox!!")
    }
  }
  let copyPass=()=>{
    if(Display){
    navigator.clipboard.writeText(Display);
    toast.success("Copied!!");
    setDisplay('');
    }
  }

  return (
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordBoxIn'>
        <input type='text' value={Display} readOnly/>
        <button onClick={copyPass}>Copy</button>
      </div>
      <div className='passlength'>
        <label>Password length</label>
        <input type='number' max={20} min={10} value={passLen} onChange={(event)=>setpassLen(event.target.value)}/>
      </div>
      <div className='passlength'>
        <label>Include uppercase letters</label>
        <input type='checkbox'checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
      </div>
      <div className='passlength'>
        <label>Include lowercase letters</label>
        <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)} />
      </div>
      <div className='passlength'>
        <label>Include numbers</label>
        <input type='checkbox' checked={numberCase} onChange={()=>setNumberCase(!numberCase)}/>
      </div>
      <div className='passlength'>
        <label>Include symbols</label>
        <input type='checkbox' checked={specialCase} onChange={()=>setSpecialCase(!specialCase)} />
      </div>
      <button className='btn' onClick={createpassword}>Generate Password</button>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}

export default App;
