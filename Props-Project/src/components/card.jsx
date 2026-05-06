import React from 'react'
import {Bookmark} from 'lucide-react' 
function Card(Prop) {
  return (
      <div className="Card"> 

       <div className="top">
          <img src={Prop.logo} alt="" />
          <button className='s-btn' >Save <Bookmark size={10}/> </button>
       </div>

              <div className="center">
               <h3>{Prop.company}<span>{Prop.date}</span></h3>
               <h2>{Prop.post}</h2>
               <div className='tags'>
                <h4>{Prop.tag1}</h4>
                <h4>{Prop.tag2}</h4>
               </div>
              </div>


         <div className="bottom">
           <div>
           <h3>{Prop.pay}</h3>
           <p>{Prop.location}</p>
           </div>
           <button>Apply Now </button>
         </div>
         </div>
    
  )
}

export default Card
