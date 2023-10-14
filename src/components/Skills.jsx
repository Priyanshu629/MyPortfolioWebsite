import React from 'react'

const Skills = () => {
  return (
    <div className='skills' >
     <h1>My Skills</h1>
     <div className='frontend' data-aos="fade-left">
      <h2>Frontend</h2>
          <i className="fa-brands fa-html5" style={{color: "#ab1c12"}}></i>
          <i className="fa-brands fa-css3-alt" style={{color: "#2a6ee5"}}></i>
          <i className="fa-brands fa-square-js" style={{color: "#bbb61b"}}></i>
          {/* <i className="fa-brands fa-node" style={{color: "#3b910d"}}></i> */}
          <i className="fa-brands fa-react" style={{color: "lightblue"}}></i>
          {/* <i className="fa-brands fa-git-alt" style={{color: "#0e44c4"}}></i> */}
        
     </div>

     <div className='backend'data-aos="fade-left">
      <h2>Backend</h2>
          
          <i className="fa-brands fa-node" style={{color: "lightgreen"}}></i>
          <i className="fa-brands fa-php" style={{color: "yellow"}}></i>
                    
          {/* <i className="fa-brands fa-git-alt" style={{color: "#0e44c4"}}></i> */}
        
        
     </div>
     <div className='database'data-aos="fade-left">
      <h2>Database</h2>
          
       <span>MongoDB</span> <span>MySQL</span>
     </div>

     <div className='tools'data-aos="fade-left">
      <h2>Tools</h2>
          
          <i className="fa-brands fa-github" style={{color: "white"}}></i>
          
          <i className="fa-brands fa-git-alt" style={{color: "white"}}></i>
        
        
     </div>
    </div>
  )
}

export default Skills
