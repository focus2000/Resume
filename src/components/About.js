import React from 'react';
import tie from '../assets/icons/tie.png'
import pin from '../assets/icons/pin.png'
import Skillcard from './Skillcard';
import {motion} from 'framer-motion'


const skills = [
    {
        icon: pin,
        title: 'Frontend Developer',
        about: 'I can build a beautiful and scalable SPA using HTML, CSS and Reactjs'
    },
    {
        icon: pin,
        title: 'Backend Developer',
        about: ' Handle Database, server, api using SQL '
        
    },
    {
        icon: pin,
        title: 'API Development',
        about: 'I can develop robust REST API using Node, Express and MongoDB'
    },
    
   
]

const About = () => {
   
    const about_variant = {
    hidden:{
        opacity:0
        
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.2, duration:0.6,
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:'easeInOut'
        }
    },
    exit:{
        opacity:0,
        transition:{
            ease:'easeInOut'
        }
    }
}

return (
    <motion.div className="about"
    varaints={about_variant}
    initial='hidden'
    animate='visible'
    exit="exit"
    >
        <h6 className ="about_intro">
        I’m a result oriented Web Developer with a passion for building world-class software solutions. An excellent team player with a positive attitude interested in the Full-Stack spectrum and working on ambitious projects with positive people.
        </h6>
        <div className="container about_container">
            <h6 className="about_heading">Skills</h6>
            <div className="row">
            {
                skills.map(skill =>
                  <Skillcard skill={skill} key ={skill.title}/>
                    
                    )
            }
            </div>
        </div>
    </motion.div>
)
}

export default About