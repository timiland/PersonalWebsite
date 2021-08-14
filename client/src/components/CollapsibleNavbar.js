import { Transition , Switch} from '@headlessui/react'
import React, {useState} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'


export default function CollapsibleNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    const burgerMenu = `w-full h-1 ${isOpen? "bg-yellow-400" : "bg-white"}`;
    const inputs = "z-50 sm:transition sm:duration-500 ease-in-out sm:transform hover:-translate-y-1 sm:hover:text-yellow-400 cursor-pointer p-2 mx-auto";
    const active = "text-yellow-400";
    const linksArr = [['WebDevelopment','Web Development'],['GraphicDesign','Graphic Design'], ['Engineering','Engineering'], ['ContactMe','Contact']]

    function Links(props) {

        return (
        <div className="z-40 flex flex-col sm:flex-row text-3xl sm:text-2xl content-center my-auto gap-6 py-10 sm:py-0 bg-green-900 sm:bg-transparent bg-opacity-90">
        {linksArr.map((link, i) => (
            <Link
                key={i}
                className={`${inputs}`}
                activeClass={active}
                spy={props.spy}
                to={link[0]}
                smooth={true}
                duration={500}
                offset={-80}
            >
                <h1>{link[1]}</h1>
            </Link>))}
        </div>
        )}


    return (
        <div>
            <div className="z-50 h-20 fixed w-screen bg-green-900 border-b-2 border-yellow-400 text-white sm:text-2xl text-lg shadow-lg flex gap-6">
                <a
                    onClick={() => {scroll.scrollToTop()}}
                    className={`my-auto cursor-pointer mr-auto`}
                    duration={500}
                >
                    <h1 className="text-5xl place-self-start ml-4">Tim Iland</h1>
                </a>
                <div className="hidden h-full md:flex md:mr-10">
                <Links spy={true}/>
                </div>
                <Switch
                    as="button"
                    checked={!isOpen}
                    onChange={() => setIsOpen(!isOpen)}
                    className={`${isOpen? "h-8" : "h-6"} w-8 focus:outline-none outline-none transition-h duration-300 ease-out sm:hidden cursor-pointer rounded-md flex flex-col justify-between mr-6 my-auto`}
                >
                    <div className={`${burgerMenu}`}></div>
                    <div className={`${burgerMenu}`}></div>
                    <div className={`${burgerMenu}`}></div>
                </Switch>
            </div>
                <Transition
                        show={isOpen}
                        className="z-40 sm:hidden fixed w-screen mt-20 text-yellow-400 border-b-2 border-yellow-400"
                        enter="transition duration-500"
                        enterFrom="transform opacity-0 -translate-y-full"
                        enterTo="transform opacity-100 -translate-y-0"
                        leave="transition duration-500"
                        leaveFrom="transform opacity-100 translate-y-full"
                        leaveTo="transform opacity-0 -translate-y-full"
                >
                    <Links spy={false}/>
                </Transition>
        </div>
    )
}
