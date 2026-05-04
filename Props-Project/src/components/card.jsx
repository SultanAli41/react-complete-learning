import React from 'react'
import {Bookmark} from 'lucide-react' 
function Card() {
  return (
      <div className="Card"> 

       <div className="top">
          <img src="https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg" alt="" />
          <button className='s-btn' >Save <Bookmark size={10}/> </button>
       </div>

              <div className="center">
               <h3>Amazon<span>5 days ago</span></h3>
               <h2>Senior UI/UX Designer</h2>
               <div className='tags'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
               </div>
              </div>


         <div className="bottom">
           <div>
           <h3>120/hr</h3>
           <p>Islamabad,Pakistan</p>
           </div>
           <button>Apply Now </button>
         </div>
         </div>
    
  )
}

export default Card
