import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faJsSquare, faHtml5, faReact, faNpm, faNode, faSass} from '@fortawesome/free-brands-svg-icons'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'

const icons = "m-4 transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400";
const iconsSm = "text-white shadow-lg rounded-md object-contain";
const iconSize = "5x";
const iconSizeSm = "lg";
const card = "bg-white text-center text-black shadow-lg rounded-2xl";

export default function WebDevelopment() {
    return (
  <div className="p-4 justify-center">
    <h1 className="text-4xl mb-8 w-full text-center">Web Stack</h1>
    <p className="text-center text-lg">I focus primarily on front-end development using React.js, but like to bring other technologies into the mix and have a solid knowledge of Web fundamentals like ES6 Javascript, HTML5 and CSS3. </p>

    <div className="flex flex-wrap justify-center mx-8 mb-8 py-8 border-b border-white">           
        <FontAwesomeIcon icon={faReact} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faJsSquare} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faHtml5} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faCss3Alt} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faSass} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faNpm} size={iconSize} className={`${icons}`} />
        <FontAwesomeIcon icon={faNode}size={iconSize} className={`${icons}`} />
    </div>
    <h2 className="text-4xl my-4 w-full text-center">Projects</h2>
    <div className={`${'grid sm:grid-cols-3 grid-cols-1 gap-8 mb-8'}`}>
        <div>
        <h2 className=" text-center text-2xl py-4">Big Cat Poll</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/BigCatPoll.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
        <div>
        <h2 className=" text-center text-2xl py-4">Dog Selector</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/DogSelector.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
        <div>
        <h2 className=" text-center text-2xl py-4">Ultimate Animal Quiz</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/UltimateAnimalQuiz.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
        <div>
        <h2 className=" text-center text-2xl py-4">Big Cat Poll</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/BigCatPoll.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
        <div>
        <h2 className=" text-center text-2xl py-4">Dog Selector</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/DogSelector.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
        <div>
        <h2 className=" text-center text-2xl py-4">Ultimate Animal Quiz</h2>
        <div className={`${card}`} >    
        <div className="h-56 flex flex-wrap justify-end content-end p-4 rounded-lg" style={{  
                backgroundImage: `url(${require('../images/UltimateAnimalQuiz.png')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-l-md shadow-md">
    <FontAwesomeIcon icon={faCode} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
    <div className="transition duration-500 ease-in-out hover:bg-green-900 bg-green-800 p-3 rounded-r-md shadow-md">
    <FontAwesomeIcon icon={faLink} size={iconSizeSm} className={`${iconsSm}`} />
        </div>  
        </div>
        </div>
        </div>
 </div>

    </div>
    )
}
