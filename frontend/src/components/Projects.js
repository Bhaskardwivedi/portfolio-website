import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/projects/")
        .then((response) => {
            setProjects(response.data);

        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
        });
    },[]);

    return(
        <div>
            <h2>Projects</h2>
            <ul>
                {Projects.map(
                    (project) => (
                        <li key={project.id}> 
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Visit Project
                            </a>
                        </li>
                ))}
            </ul>
        </div>    
    );

};
export default Projects;

