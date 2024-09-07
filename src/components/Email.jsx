/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className='m-1'>
            <form ref={form} onSubmit={sendEmail} id="email" className='lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mr-80'>
                <label className="leading-7 text-sm">Name</label>
                <input type="text" name="from_name" className="w-full text-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none  py-1 px-3 leading-8  duration-200 ease-in-out" />
                <label className="leading-7 text-sm ">Email</label>
                <input type="email" name="from_email" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <label className="leading-7 text-sm">Message</label>
                <textarea name="message" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <button type="submit" value="Send" className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Send</button>
            </form>
        </div>
        //     <section className="text-gray-600 body-font relative">
        //     
        //       <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        //         <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        //         <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        //         <div className="relative mb-4">
        //           <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        //           <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        //         </div>
        //         <div className="relative mb-4">
        //           <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        //           <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        //         </div>
        //         <div className="relative mb-4">
        //           <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        //           <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        //         </div>
        //         <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        //         <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        //       </div>
        //     </div>
        //   </section>
    );
}

export default Email;