import React from 'react'
import images from './App'

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => {
//       images[item.replace('./', '')] = r(item);
//     });
//     return images;
//   }
//   const images = importAll(
//     require.context('../images', false, /\.(png|jpe?g|svg)$/)
//   );

{/* <img className="object-contain h-48 w-full" src={images[`${"Jaguar"}.png`]} alt="yo"></img> */}

// const img

export default function Intro() {
    return (
        <div className="h-screen flex flex-wrap">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
                <div className="overflow-hidden h-64 w-64 rounded-full">
                <img className="" src={require('../images/Profile Pic.jpg')}></img>
                </div>

            </div>
            <div className="w-full md:w-1/2 flex flex-wrap content-start p-4 justify-center md:justify-start">
           <h1 className="text-6xl mb-4">Tim Iland</h1>
           <h2 className="text-md sm:text-2xl mb-4">Web Developer - Engineer - Graphic Designer</h2>
           <p className="text-center md:text-justify"> As you will see from my projects, I am a man of many passions and you will find that I have been involved in a wide range of projects. I am currently investing my time in developing full-stack React Applications, and Vector Graphics.</p>
            </div>
        </div>

    )
}
