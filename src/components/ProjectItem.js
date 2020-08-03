import React from 'react';
import '../css/ProjectItem.css';

function ProjectItem({name, description}){
    return (
        <div className="container">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ProjectItem;