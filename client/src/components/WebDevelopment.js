import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJsSquare, faHtml5, faReact, faNpm, faNode, faSass, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

const iconArr = [faReact,faJsSquare,faHtml5,faCss3Alt,faSass,faNpm,faNode];

const projectsArr = ['Big Cat Poll', 'Dog Selector', 'Ultimate Animal Quiz'];

const icons = iconArr.map((icon, i) => (
    <FontAwesomeIcon key={i} icon={icon} size="4x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400"/>
))

// const projects = projectsArr.map((project, i) => (
//     <div key={i} className="flex flex-col">
//         <h2 className=" text-center text-3xl pb-8">{project}</h2>
//         <div className=" text-center pb-8" > Description of the website that is being displayed</div>   
//         <div className="flex text-center justify-center">

//             <a href="https://github.com/timiland/animal-quiz" target="_blank">
//                 <FontAwesomeIcon icon={faCode} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer"  />
//             </a>  
//             <a className="https://timiland.co.uk/dog-selector/">
//                 <FontAwesomeIcon icon={faLink} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer" />
//             </a> 

//         </div>

//     </div>

// ))


export default function WebDevelopment() {
    return (
  <React.Fragment>
    <h1 className="text-5xl py-10 w-full text-center">Web Development</h1>
    <p className="py-14 mx-auto max-w-prose text-center text-lg">I focus primarily on front-end development using React.js, although I like to bring other technologies into the mix and have a solid knowledge of Web fundamentals like ES6 Javascript, HTML5 and CSS3. This Website is built using React, with Tailwind for styling and a variety of other packages.</p>
    <div className="flex justify-center">
        <div className="text1 cursor-pointer flex items-center text-3xl mt-10 bg-white hover:bg-yellow-400 text-green-900 rounded-md p-2 pr-4 transition duration-500 ease-in-out transform hover:-translate-y-1"><FontAwesomeIcon icon={faGithubSquare} size="2x" className="mr-4"/>Github</div></div>
    <div className="z-0 flex flex-wrap justify-center py-16 border-b border-white">           
        {icons}
    </div>
    <h2 className="text-4xl py-16 w-full text-center">Projects</h2>
    <div className={`${'grid sm:grid-cols-3 grid-cols-1 gap-16 mb-10'}`}>   
        <div className="flex flex-col">
            <h2 className=" text-center text-3xl pb-8">Big Cat Poll</h2>
            <div className=" text-center pb-8" > Vote for your favourite Big Cat and learn about their unique adaptations.</div>   
            <div className="flex text-center justify-center">
                <a href="https://github.com/timiland/big-cat-poll" target="_blank">
                    <FontAwesomeIcon icon={faCode} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer"  />
                </a>  
                <a href="https://timiland.co.uk/big-cat-poll/" target="_blank">
                    <FontAwesomeIcon icon={faLink} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer" />
                </a> 
            </div>
        </div>
        <div className="flex flex-col">
            <h2 className=" text-center text-3xl pb-8">Dog Selector</h2>
            <div className=" text-center pb-8" >Use filters to find sift through a selection of breeds and settle upon your ideal dog.</div>   
            <div className="flex text-center justify-center">
                <a href="https://github.com/timiland/dogselector" target="_blank">
                    <FontAwesomeIcon icon={faCode} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer"  />
                </a>  
                <a href="https://timiland.co.uk/dog-selector/" target="_blank">
                    <FontAwesomeIcon icon={faLink} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer" />
                </a> 
            </div>
        </div>
        <div className="flex flex-col">
            <h2 className=" text-center text-3xl pb-8">Ultimate Animal Quiz</h2>
            <div className=" text-center pb-8" > Test your animal knowledge in this unnecessarily difficult Animal Quiz.</div>   
            <div className="flex text-center justify-center">
                <a href="https://github.com/timiland/animal-quiz" target="_blank">
                    <FontAwesomeIcon icon={faCode} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer"  />
                </a>  
                <a href="https://timiland.co.uk/ultimate-animal-quiz/" target="_blank">
                    <FontAwesomeIcon icon={faLink} size="2x" className="z-0 m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400 cursor-pointer" />
                </a> 
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}
