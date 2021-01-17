import React from 'react'

const icons = "m-4 text-white transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400";
const iconSize = "5x";
const card = "bg-white text-center text-black shadow-lg rounded-lg p-4 border-2 border-green-900";
const li = "py-4";
const EngLogos = "p-4 py-auto mx-auto w-3/4 sm:w-4/5 text-center content-center";

export default function GraphicDesign(props) {
    return (
<div className="p-8 justify-center">
    <h1 className="text-5xl py-10 w-full text-center">Graphic Design</h1>
    <p className="mt-4 text-center text-lg">Hopefully you took the time to look at some of my Web Projects shown above. If so, you'll notice that most of my Web Projects make use of my illustrations. I have been involved in some logo design and graphic projects shown below, and whilst I am not pursuing a career in Graphic Design, my eye for graphics and aesthetics always works its way into my other projects. I've also served as an emergency Graphic Designer in past roles - my previous employer now uses a logo I designed for them!</p>

    <div className="flex flex-wrap justify-center mx-8 mb-8 py-8 border-b border-black">
    </div>
    <h2 className="text-4xl my-4 w-full text-center">Projects</h2>
   <img className={`${"mx-auto w-full -my-16"}`} src={require('../images/Jaguar.png')}></img>
   <p className="text-center text-lg"> I specialise in using SolidWorks for parametric CAD modelling and have over 5 years of experience using this software. Using Visual basic I have managed to automate the software using some of my own macros, but more recently I have used DriveWorks to implement automation projects.<br/><br/> I like to use Blender for more organic modelling, and I have experience using Materialise Magics for Additive Manufacturing - whilst there are other programs for 3D printing, I believe that Magics is a cut above them.</p>
 </div>
    )
}
