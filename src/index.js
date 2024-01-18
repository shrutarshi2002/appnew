import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Head.jsx";
//import Sdata from "./data.js"
import "./index.css";
import Card from "./card.js";
import Db_con from "./db_connection.js";

  

  var date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();// 01
  let ss = date.getSeconds();
  let wen = "AM";
  const Clock = () =>{
    if(hh >=12 && mm >= 1){
      wen = "PM";
      return(
        
        <>
        <h1>{hh + ":" + mm + ":"+ ss + wen}</h1>

        </>
        
        
      )
    }else{

      return(
      
        <>
        <h1>{hh + ":" + mm + ":"+ ss + wen}</h1>

        </>
        
      )
    }
  }
  


ReactDOM.render(
  <>
  <Heading></Heading>
  <Card 
  imgscrc="https://img.zorores.com/_r/300x400/100/f4/02/f402e8b836e5122ca9d3dc7be66b11a7/f402e8b836e5122ca9d3dc7be66b11a7.jpg"
  
  ></Card>
  

  <Clock></Clock>
  </>
  ,document.getElementById('root'));
