import React, { useState } from 'react'
import axios from 'axios'

const icons = "m-4 text-white transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-400";
const iconSize = "5x";
const card = "bg-white text-center text-black shadow-lg rounded-lg p-4 border-2 border-green-900";
const li = "py-4";
const inputs = "block p-3 mt-4 mb-2 text-gray-700 bg-white focus:outline-none appearance-none focus:border-2 focus:border-green-800 focus:shadow-inner rounded-md shadow-lg";
const placeholderGraphics = "My business needs a brand new logo, we think that your style would really suit our brand.";
const placeholderEng = "We are in need of an Additive Manufacturing expert for our new product line. Would you be available to assess and potentially redesign our products for SLS production?";
const placeholderWeb = "I run a small business based in North London. We are currently using squarespace for our website but we are wondering if maybe you could design us something really special to help us stand out from the competition?";

 const ContactMe = () => {

    const [state, setState] = useState({

        name:'',
        email: '',
        subject: '',
        message: ''

    })

    const [result, setResult] = useState(null)

    const sendEmail = e => {

        e.preventDefault();


        axios({
          url:'http://localhost:5000/api/send',
          method: 'POST',
          data: {...state}
        })
            .then(res => {
              setResult(res.data);
              setState({name:'',email:'',subject:'',message:''})
            })
            .catch(() => {
              setResult({ success:false, message: 'Something went wrong. Try again later'})
            })
    };

    const onInputChange = e => {

        const { name, value } = e.target;
        console.log(e.target.name);
        setState({
            ...state,
            [name]:value
        });
        console.log(state);
    };


    return (
<div className="p-4 pt-8 pb-16">
   <h1 className="text-4xl pb-4 mb-4 w-full text-center border-b border-black">Contact Me</h1>
   <form onSubmit={sendEmail} className="mt-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-4">
        <span className="w-full">
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input id="name" type="text" value={state.name} onChange={onInputChange} name="name" placeholder="John" autoComplete="given-name" className={`${inputs} w-full`} required/>
        </span>
        <span className="w-full">
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input id="email" type="email" value={state.email} onChange={onInputChange} name="email" placeholder="john.doe@company.com" autoComplete="email" className={`${inputs} w-full `} required />
        </span>
      </div>
      <label htmlFor="email" className="block mt-2 font-semibold">Subject (Optional)</label>

<div className="flex sm:flex-nowrap flex-wrap mt-4">
<div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" className=""/>
        <span className="ml-3">Web Development</span>
      </label>
    </div>
    <div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" onChange={onInputChange} className=""/>
        <span className="ml-3">Graphic Design</span>
      </label>
    </div>
    <div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" onChange={onInputChange} className=""/>
        <span className="ml-3">Engineering</span>
      </label>
    </div>
</div>

<div className="relative">
<label htmlFor="message" className="block font-semibold">Message</label>
      <textarea id="message" type="text" name="message" onChange={onInputChange} placeholder={placeholderWeb} className={`${inputs} w-full h-56 content-start min-h-20`} required />
     <button type="submit" className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:bg-green-900 bg-green-800  text-white shadow-lg bottom-4 right-4 rounded-md text-xl p-4 absolute">
        Send
      </button>
      </div>
    </form>
  </div>
    )
}

export default ContactMe;
