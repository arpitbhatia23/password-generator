
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState,useCallback } from 'react'
function App() {
  const [length,setlenght]=useState(8);
const[numberallowed,setnumberallowed]=useState(false);
const[charallowed,setcharallowed]=useState(false);
const[password,setpassword]=useState("");
const passwordRef=useRef();
const passwordgenerator =useCallback(()=>{
  let pass=''
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
if(numberallowed) str+='0123456789'
if(charallowed) str+='!@#$%^&*()_[{}[]+=-~'
for(let i=1 ; i <=length; i++ ){
 let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char)

}
setpassword(pass)



},[length,charallowed,numberallowed,setpassword])
const copytoclipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,60)
  window.navigator.clipboard.writeText(password)},[password])

useEffect(()=>{
passwordgenerator();},[length,charallowed,numberallowed,passwordgenerator])

  return (
    <>
<div className=' w-full   item-center  rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
  <h1 className='text-white text-center my-2 '>password genterator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type='text' value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly ref={passwordRef}/>
  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copytoclipboard}
  >copy </button>
  </div>
  <div className='flex text-sm gap-x-2 '>
    <div className='flex items-center gap-x-1'>
      <input type="range"  min={6} max={60}
      value={length} 
      className='cursor-pointer'
      onChange={(e)=>{setlenght(e.target.value)}} 
      />
      <label>lenght:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
     <input type="checkbox"  defaultChecked={numberallowed}
     id="numberInput"
     onChange={()=>{setnumberallowed((prev)=>!prev)
     }} /> 
     <label htmlFor="">number</label>
    
    </div>
    <div className='flex items-center gap-x-1'>
     <input type="checkbox"  defaultChecked={charallowed}
     id="charInput"
     onChange={()=>{setcharallowed((prev)=>!prev)
     }} /> 
     <label htmlFor="">character</label>
    
    </div>
  </div>
   </div>
    </>
  )
}

export default App
