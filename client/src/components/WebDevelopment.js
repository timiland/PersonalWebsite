import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJsSquare, faHtml5, faReact, faNpm, faNode, faSass, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

const iconArr = [faReact,faJsSquare,faHtml5,faCss3Alt,faSass,faNpm,faNode];

const projectsArr = ['Big Cat Poll', 'Dog Selector', 'Ultimate Animal Quiz'];

const icons = iconArr.map((icon, i) => (
    <FontAwesomeIcon key={i} icon={icon} size="4x" className="m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400"/>
))

const projects = projectsArr.map((project, i) => (
    <div key={i}>
        <h2 className=" text-center text-2xl pb-8">{project}</h2>
        <div className="bg-white text-center text-black shadow-lg rounded-2xl" >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-md" style={{  
                backgroundImage: `url(${require('../images/'+ project.replaceAll(' ', '') +'.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size="lg" className="text-white shadow-lg rounded-md object-contain" />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size="lg" className="text-white shadow-lg rounded-md object-contain" />
        </div>  
        </div>
        </div>
        </div>
))


export default function WebDevelopment() {
    return (
  <React.Fragment>
    <h1 className="text-5xl py-10 w-full text-center">Web Development</h1>
    <p className="py-14 mx-auto max-w-prose text-center text-lg">I focus primarily on front-end development using React.js, although I like to bring other technologies into the mix and have a solid knowledge of Web fundamentals like ES6 Javascript, HTML5 and CSS3. This Website is built using React, with Tailwind for styling and a variety of other packages.</p>
    <div className="flex justify-center">
        <div className="text1 cursor-pointer flex items-center text-3xl mt-4 bg-white hover:bg-yellow-400 text-green-900 rounded-md p-2 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-1"><FontAwesomeIcon icon={faGithubSquare} size="2x" className="mr-4"/>Github</div></div>
    <div className="flex flex-wrap justify-center py-16 border-b border-white">           
        {icons}
    </div>
    <h2 className="text-4xl my-16 w-full text-center">Projects</h2>
    <div className={`${'grid sm:grid-cols-3 grid-cols-1 gap-16'}`}>   
        {projects}
        </div>
    </React.Fragment>
    )
}
