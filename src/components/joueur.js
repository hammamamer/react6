import React,{Component} from 'react'
import Neymar from './../Neymar.jpg'
import img from './../messi.jpg'
class Joueur extends Component{
	render(){
		return(

			<div>
                <button onClick={()=>img=Neymar}>Neymar</button>
               <img src={img}/>
               </div>

     
			)
	}
}
export default Joueur