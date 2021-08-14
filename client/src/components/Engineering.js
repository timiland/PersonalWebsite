import React, {Fragment} from 'react'
const card = "bg-white text-center text-black shadow-lg rounded-lg p-4";
const li = "py-4";
const EngLogos = "p-4 py-auto mx-auto w-3/4 sm:w-4/5 text-center content-center";

export default function Engineering() {
    return (         
<Fragment>
   <h1 className="text-5xl py-10 w-full text-center">Engineering</h1>
        <p className="mt-14 mb-8 mx-auto max-w-prose text-center text-lg"> I specialise in using SolidWorks for parametric CAD modelling and have over 5 years of experience using this software. Using Visual basic I have managed to automate the software using some of my own macros, but more recently I have used DriveWorks to implement automation projects.<br/><br/> I like to use Blender for more organic modelling, and I have experience using Materialise Magics for Additive Manufacturing - whilst there are other programs for 3D printing, I believe that Magics is a cut above them.</p>
    <div className="flex flex-wrap justify-center mx-8 mb-8 py-8 border-b border-white">
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-14">  
       <div className={`${card} flex flex-wrap content-between`}>
       <h2 className="text-4xl my-4 w-full text-center">Resume</h2>
        <p className={`${li} w-full`}><span className="font-bold">MEng Mechanical and Manufacturing Engineering</span><br/>The University of Warwick<br/>( Graduated 2017 with 1st Class Honours )</p>
        <p className={`${li} w-full`}><span className="font-bold">Applications Engineer</span><br/><a href="#" className="no-underline text-blue-800">Solid Solutions</a> (2014 - 2015)</p>
        <p className={`${li} w-full`}><span className="font-bold">Polymer Applications Engineer</span><br/><a href="#" className="no-underline text-blue-800 fontSecondary">3T Additive Manufacturing</a> (2018 - 2020)</p>
        <p className={`${li} w-full`}><span className="font-bold">Applications Engineer</span><br/><a href="#" className="no-underline text-blue-800">DriveWorks</a> (2020 - current)</p>
        <a href=".\src\download\CV TIM ILAND Tech.pdf" className="cursor-pointer w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-green-900 bg-green-800  text-white shadow-lg rounded-md text-2xl p-4 m-4 text1" download>Download Full Resume</a>

       </div>
       <div className={`${card}`}>
       <h2 className="text-4xl my-4 w-full text-center">Software</h2>
       <p className="text-center"> Listed below are the software packages that I use and any notable certifications that I have acheived.</p>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 items-center">
           <img className={`${EngLogos}`} src={require('../images/SolidWorksLogo2.png')}></img>
           <p className={`${li} sm:text-left`}><span className="font-bold">SolidWorks - CSWE</span><br/>Used for parametric CAD Modelling<br/></p>
           <img className={`${EngLogos}`} src={require('../images/DriveWorksLogo.png')}></img>  
           <p className={`${li} sm:text-left`}><span className="font-bold">DriveWorks - CDWP</span><br/>Used for Automating SolidWorks, and also where I currently work</p>
           <img className={`${EngLogos}`} src={require('../images/BlenderLogo2.png')}></img>
           <p className={`${li} sm:text-left`}><span className="font-bold">Blender</span><br/>Used for designing more artistic 3D models</p>
           <img className={`${EngLogos}`} src={require('../images/MaterialiseLogo.png')}></img>  
           <p className={`${li} sm:text-left`}><span className="font-bold">Materialise Magics</span><br/>Used for setting up builds for Additive Manufacture</p>
           </div>
       </div>
    </div>
</Fragment>
    )
}
