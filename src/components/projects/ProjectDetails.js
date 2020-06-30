import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. At three years old, Sandy's stubborn personality had already bloomed into full view.</p>
                </div>
                <div className="card action grey lighten-4 grey-text">
                    <div>Posted by Sidharth Shamshabad</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
