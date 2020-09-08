import React from 'react';
import facebook from '../assets/icons/facebook.png'
import github from '../assets/icons/github.png'
import avatar from '../assets/icons/avatar.png'
import whatsapp from '../assets/icons/whatsapp.png'
import tie from '../assets/icons/tie.png'
import pin from '../assets/icons/pin.png'
import {motion} from 'framer-motion'
import resume from '../assets/Resume.pdf.docx'




const Sidebar = () => {
    const handleEmail = () => {
        window.open("mailto: nwachukwuken92")
    }
    const handleGithub = () => {
        window.open('https://github.com/focus2000')
    }
    const handleWhatsapp = () => {
        window.open('https://whatsapp.com/08167471409')
    }
    const sidebar_variant = {
        hidden:{
            x:'-20vw',
            
        },
        visible:{
            x:0,
            transition:{
                delay:0.1, duration:0.5,type:'spring'
            }
        }
    }

    return (
     

     <motion.div className="sidebar"
     
     variants={sidebar_variant}
     initial='hidden'
     animate='visible'

       variants={sidebar_variant}
>
         <img src={avatar} alt="avatar" className="sidebar_avatar"/>
         <div className="sidebar_name">Kenneth <span>Nwachukwu</span></div>
         <div className="sidebar_item sidebar_title">Web Developer</div>
         <a href={resume} download="resume.pdf.docx">
             <div className ="sidebar_item sidebar_resume">
                 <img src={tie} alt="resume" className="sidebar_icon"/> Download Resume
             </div>
         </a>
         <figure className="sidebar_social-icons my-2">
            <a href=""><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
            <a href=""><img src={whatsapp} alt="whatsapp" className="sidebar_icon" onClick={handleWhatsapp}/></a>
         </figure>
         <div className ="sidebar_contact">
             <div className="sidebar_item sidebar_github">
                 <a href="https://github.com/focus2000"><img src={github} alt="github" className="sidebar_icon mr-3" onClick={handleGithub}/>github</a>
             </div>
             <div className="sidebar_location">
                 <img src={pin} alt="location" className="sidebar_icon mr-3"/>
                 Abuja, Nigeria
                 </div>
             <div className="sidebar_item">nwachukwuken92@gmail.com</div>
             <div className="sidebar_item">+2348167471409</div>
         </div>
         <div className ="sidebar_item sidebar_email" onClick={handleEmail}>email me</div>
     </motion.div>
    )
}

export default Sidebar