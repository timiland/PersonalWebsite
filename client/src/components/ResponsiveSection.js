import React from 'react'

export default function ResponsiveSection(props) {
    return (
        <section className={`${props.topslant == true ? "-mt-10" :''} ${props.topborder == true ? `border-t-8 border-${props.bordercolor}` :''}`}>
            {props.topslant == true ?
                <svg className={`w-screen h-10 fill-current text-${props.bg} mr-2`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 20 20" fill="currentColor">
                <polygon points="0,0 0,20 20,20" />
                </svg> : ''}

        <div className={`w-screen flex justify-center bg-${props.bg} ${props.container==true ? 'py-8' : ''}`} id={props.id}>
            
        <div className={`m-10 w-full lg:w-8/12 text-${props.textcolor} ${props.container==true ? `bg-${props.containerbg} shadow-lg rounded-lg` : ''}`}>
            {props.children}
        </div>

        </div>
        {props.bottomslant == true ?
                <svg className={`w-screen h-10 fill-current text-${props.bg} mr-2`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 20 20" fill="currentColor">
                <polygon points="0,0 20,0 20,20" />
                </svg> : ''}
              </section>
    )
}
