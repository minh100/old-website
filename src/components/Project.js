import React from 'react';
import ProjectItem from './ProjectItem.js';
import '../css/Project.css';
function Project() {
    return (
        <div id="project" className="Project-page">
            <h2>Projects</h2>
            <div className="project-item-holder">
                <ProjectItem name="Portfolio Website"
                    description="This website was a little summer quarantine project to learn React and give me an insight into basic web development.
                    Although I have created this website, I still have much more to learn both front-end and back-end."
                />
                <ProjectItem name="Assassins"
                    description='A program based on the popular game "Assassins" which utilizes a linked list to automatically update the status of the game and stores it in a file locally.
                    This reduces unnecessary manual updates and eliminates mistakes.'
                />
                <ProjectItem name="Next Drama"
                    description='A fun program to help me decide on which tv show or drama to watch next.
                    It randomly assigns each item a new number everytime and the program randomly chooses the item.
                    The data is can be written and read from a file that is saved locally.'

                />

            </div>
        </div>
    );
};

export default Project;