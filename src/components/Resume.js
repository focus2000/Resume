import React from 'react';
import pin from '../assets/icons/pin.png'
import Bar from './Bar';
import {motion} from 'framer-motion'


const languages = [
    {
        icon:pin,
        name:"Html",
        level:'80'
    },

    {
        icon:pin,
        name:"Css",
        level:'75'
    },

    {
        icon:pin,
        name:"Javascript",
        level:'65'
    },

    {
        icon:pin,
        name:"Reactjs",
        level:'80'
    },

    {
        icon:pin,
        name:"Node",
        level:'60'
    },

    {
        icon:pin,
        name:"Express",
        level:'75'
    },
    {
        icon:pin,
        name:"MongoDB",
        level:'70'
    },
    {
        icon:pin,
        name:"Bootstrap",
        level:'50'
    },
]


const tools=[
    {
        icon:pin,
        name:"Git",
        level:'60'
    },

    {
        icon:pin,
        name:"Jest",
        level:'40'
    },
]





const Resume = () => {
    const resume_variant = {
        hidden:{
            x:'-20vw'
            
        },
        visible:{
            x:0,
            transition:{
                delay:0.1, duration:0.5,type:'spring'
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
   
        <motion.div className="container resume"
        
        
        varaints={resume_variant}
        initial='hidden'
        animate='visible'
        exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
           <h4 className ="resume-card_heading">
               Education
           </h4>
           <div className="resume-card_body">
               <h5 className="resume-card-title">
                   Bsc Marketing
               </h5>
               <p className="resume-card_name">
                   University of Jos (2015-2018)
               </p>
               <p className ="resume-card_details"></p>
           </div>
                </div>

                <div className="col-lg-6 resume-card">
           <h4 className ="resume-card_heading">
               Experience
           </h4>
           <div className="resume-card_body">
               <h5 className="resume-card-title">
                   Intern
               </h5>
               <p className="resume-card_name">
                   
               </p>
               
           </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} key={language.name}/>
                                )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools 
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>

        </motion.div>
    
)
}

export default Resume