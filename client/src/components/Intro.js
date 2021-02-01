import React from 'react'
import ThreeJSContainer from './ThreeJSContainer'

export default function Intro() {
    return (
        <div className="h-auto sm:h-screen flex flex-wrap">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                <div className="w-full sm:py-80">
                <ThreeJSContainer/>
                </div>
                <div className="w-full flex flex-wrap content-center p-4 justify-center md:justify-start">
                    <h1 className="text-6xl mb-4">Tim Iland</h1>
                    <h2 className="text-md sm:text-2xl mb-4">Web Developer - Engineer - Graphic Designer</h2>
                    <p className="text-center md:text-justify"> As you will see from my projects, I am a man of many passions and you will find that I have been involved in a wide range of projects. I am currently investing my time in developing full-stack React Applications, and Vector Graphics.</p>
                </div>

            </div>

        </div>

    )
}
