import React, { Component } from 'react';
import Neymar from './Neymar.jpg'
import Ramos from './ramos.jpg'
import Messi from './messi.jpg'
import AppStyle from './App.css'

class App extends Component{
   
   render() {
      const NeymarFunction =()=>{
      document.getElementById("text").innerHTML = "The ball Tackles Neymar in the middfield <br/> The referee gives him Penalty! and gives Ramos a red cart :)";
      document.getElementById("Name").innerHTML = " Neymar ";
      document.getElementById('img').setAttribute("src",Neymar);
      document.getElementById('img').style.border="solid  ";
      document.getElementById('img').style.height=" 400px";
      document.getElementById('img').style.width=" 500px"}
      const RamosFunction  =()=>{
      document.getElementById("text").innerHTML = "Everybody Plays Football but it's more funny for me to play with player's Foot";
      document.getElementById("Name").innerHTML = " Ramos ";
      document.getElementById('img').setAttribute("src",Ramos);
      document.getElementById('img').style.border="solid ";
      document.getElementById('img').style.height=" 400px";
      document.getElementById('img').style.width=" 500px"
   }
      const MessiFunction  =()=>{
      document.getElementById("text").innerHTML = "All you have to do is Give me the Ball and you wel see a GOAL! ";
      document.getElementById("Name").innerHTML = " Messi ";
      document.getElementById('img').setAttribute("src",Messi);
      document.getElementById('img').style.border="solid ";
      document.getElementById('img').style.height=" 400px";
      document.getElementById('img').style.width=" 500px"

   }
      
      
      const NameStyle=
      { 
         color:"white",
         backgroundColor:'black',
         height:35,width:150 ,
         borderBottomLeftRadius: 50,
         borderTopRightRadius: 50
      }
      
      

      return(  
         <div style={{backgroundColor:"white",height:900,width:900}} align="center">
         <div>
         <button onClick={NeymarFunction}>Neymar</button>
         <button onClick={RamosFunction}>Ramos</button>
         <button onClick={MessiFunction}>Messi</button>
            </div>
         <img  id="img"/>
         <h2 style={NameStyle} id="Name" ></h2>
         <h3 id="text"></h3>
         
        
         </div>
      );
   }
}

export default App;
