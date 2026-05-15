import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
const users = [
  {
   img :"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
   intro: "Bright clouds drift above silent mountains while travelers share stories beside crackling evening campfires softly.",
   tag:"Satisfied",
   color:'red'

  },
  {
   img :"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMGxhZHl8ZW58MHx8MHx8fDA%3D",
   intro: "Curious students explored ancient libraries this, mysterious symbols, and fascinating historical secrets yesterday.",
   tag:"Underserved",
   color:'blue'
  },
  {
   img :"https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBsYWR5fGVufDB8fDB8fHww",
   intro: "Rainwater collected quietly beneath wooden bridges as distant this and peaceful countryside villages overnight.",
   tag:"Underbank",
   color:'lightseagreen'
  }
]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
