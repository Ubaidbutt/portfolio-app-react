import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    // console.log (`this.props ${this.props}`);
    const {title, image, description } =  props.project;
    return (
        <div style = {{display: 'inline-block', width: 300, margin:10}}>
            <h3> {title} </h3>
            <img src = {image} alt = 'profile' style = {{ width: 200, height: 120}} />
            <p> {description} </p>
        </div>
    )
}


const Projects = () => {
    return (
        <div>
            <h2>Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map (PROJECT => {
                        return (
                            <Project key = {PROJECT.id} project = {PROJECT} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects;
