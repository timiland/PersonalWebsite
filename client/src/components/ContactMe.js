import React, { Fragment, useState } from 'react'
import axios from 'axios'

const inputs = "block p-3 mt-4 mb-2 bg-white focus:outline-none appearance-none border border-green-800 focus:shadow-inner rounded-md shadow-lg";

 const ContactMe = () => {

    const [state, setState] = useState({

        name:'',
        email: '',
        subject: [],
        message: ''

    })

    const [result, setResult] = useState(null)

    const sendEmail = e => {

        e.preventDefault();

        let data = state;
        data = {...data, subject: data.subject.join(', ')};

        axios({
          url:'/api/send',
          method: 'POST',
          data: { data }
        })
            .then(res => {
              setResult(res.data);
              setState({name:'',email:'',subject:[],message:''})
            })
            
            .catch(() => {
              setResult({ success:false, message: 'Something went wrong. Try again later'})
            })
    };

    const onInputChange = e => {

        const { name } = e.target;

        let { value } = e.target;

        if (name == "subject") {

          let subject = state.subject;
        
          if(subject.indexOf(value) === -1) {

            subject.push(value);

        } else {

          const i = subject.indexOf(value);

          subject.splice(i, 1);

        };

        value = subject;

        };

        setState({
            ...state,
            [name]:value
        });

    };


    return (
<Fragment>
<h1 className="text-5xl pt-10 pb-20 mx-4 px-8 mb-14 text-center border-b border-black">Contact Me</h1>
   <form onSubmit={sendEmail} className="my-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-4">
        <span className="w-full">
          <label htmlFor="name" className="block text1 text-2xl">Name</label>
          <input id="name" type="text" value={state.name} onChange={onInputChange} name="name" placeholder="Your name please!" autoComplete="given-name" className={`${inputs} w-full`} required/>
        </span>
        <span className="w-full">
          <label htmlFor="email" className="block text1 text-2xl">Email</label>
          <input id="email" type="email" value={state.email} onChange={onInputChange} name="email" placeholder="your_email@company.org" autoComplete="email" className={`${inputs} w-full `} required />
        </span>
      </div>
      <label htmlFor="email" className="block mt-2 text1 text-2xl">Subject (Optional)</label>

<div className="flex sm:flex-nowrap flex-wrap mt-4">
<div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" value="Web Development" onChange={onInputChange} className=""/>
        <span className="ml-3">Web Development</span>
      </label>
    </div>
    <div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" value="Graphic Design" onChange={onInputChange} className=""/>
        <span className="ml-3">Graphic Design</span>
      </label>
    </div>
    <div className="w-full sm:w-auto">
      <label className="flex content-center p-3">
        <input type="checkbox" name="subject" value="Engineering" onChange={onInputChange} className=""/>
        <span className="ml-3">Engineering</span>
      </label>
    </div>
</div>

<div className="relative">
<label htmlFor="message" className="block text1 text-2xl">Message</label>
      <textarea id="message" type="text" name="message" value={state.message} onChange={onInputChange} placeholder="What can I help you with?" className={`${inputs} w-full h-56 content-start min-h-20`} required />
     <button type="submit" className="transition duration-500 ease-in-out transform hover:-translate-y-2 hover:bg-green-900 bg-green-800  text-white shadow-lg bottom-4 right-4 rounded-md text-xl p-4 absolute">
        Send
      </button>
      </div>
    </form>
  </Fragment>
    )
}

export default ContactMe;
