import React, {useState} from 'react'

const slides = "z-0 h-80 w-full p-8 cursor-pointer";

export default function ModalPic(props) {

    const [Modal, setShowModal] = useState(false);

    return (
        <React.Fragment>

            <img onClick={() => setShowModal(true)} className={`${slides}`} src={require(`../images/${props.category}/${props.pic}.svg`)}></img>

            {Modal ? (
            <React.Fragment>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                <div className="m-10 w-full sm:w-1/3 bg-white rounded-lg">
                    {/*content*/}
                   
                    {/*header*/}
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                    <img className={`w-full pointer-events-none`} src={require(`../images/${props.category}/${props.pic}.svg`)}></img>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-center p-4 rounded-b">
                    <button onClick={()=> setShowModal(false)} type="button" className="w-full transition text-3xl duration-500 ease-in-out transform hover:-translate-y-1 focus:outline-none outline-none hover:bg-green-900 bg-green-800  text-white shadow-lg rounded-md p-4">
                        <h1>Close</h1>
                    </button>
                    </div>
                    
                </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </React.Fragment>
            ) : null}
        </React.Fragment>
        );
    }
