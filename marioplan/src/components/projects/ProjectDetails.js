import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id 

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, dolore corporis facere earum nam eius nobis iste porro quas, enim delectus quae aliquam voluptas nostrum in asperiores beatae eos rerum!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Brent Seaton</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails