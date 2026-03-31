import React from 'react';
import "./PageNavigationcss.css";
const PageNavigation = (props) => {
 return (
 <div className='btn'>
     <button onClick={()=>{
        props.click("");
     }}  disabled={props.prevUrl==null}
  className="active:scale-75 disabled:opacity-50 disabled:cursor-not-allowed" >PREV</button>

     <button onClick={()=>{
        props.click("Next");
     }} className='active:scale-75'>NEXT</button>
 </div>
 );
};

export default PageNavigation;