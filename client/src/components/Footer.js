import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faCodepen, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const icons = "my-auto w-full";
const iconSize = "lg";
const iconBox= "w-12 h-12 flex content-center justify-center transition duration-500 ease-in-out text-white hover:bg-white hover:text-green-800 border-white border-2 rounded-full";

export default function Footer() {
    return (
<div className="text-center">
<div className="flex flex-wrap justify-center py-8 gap-6">  
        <div className={`${iconBox}`}>    
        <FontAwesomeIcon icon={faLinkedinIn} size={iconSize} className={`${icons}`} />
        </div>     
        <div className={`${iconBox}`}>    
        <FontAwesomeIcon icon={faInstagram} size={iconSize} className={`${icons}`} />
        </div>
        <div className={`${iconBox}`}>    
        <FontAwesomeIcon icon={faCodepen} size={iconSize} className={`${icons}`} />
        </div>     
        <div className={`${iconBox}`}>    
        <FontAwesomeIcon icon={faGithub} size={iconSize} className={`${icons}`} />
        </div>     
        <div className={`${iconBox}`}>    
        <FontAwesomeIcon icon={faShoppingCart} size={iconSize} className={`${icons}`} />
        </div>     
    </div> 
    <span className="w-full text-center">All images are copyright of Tim Iland 2020</span>
    </div>
    )
}
