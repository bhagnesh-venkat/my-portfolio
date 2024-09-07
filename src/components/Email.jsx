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
        <div className="flex justify-center items-center min-h-screen bg-black py-10 px-4">
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              id="email" 
              className="w-full max-w-lg bg-black flex flex-col p-6 border border-gray-700 rounded"
            >
                <label className="leading-7 text-sm text-white mb-2">Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  className="w-full text-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-3 leading-8 mb-4"
                />
                <label className="leading-7 text-sm text-white mb-2">Email</label>
                <input 
                  type="email" 
                  name="from_email" 
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-black py-2 px-3 leading-8 mb-4"
                />
                <label className="leading-7 text-sm text-white mb-2">Message</label>
                <textarea 
                  name="message" 
                  className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-black py-2 px-3 resize-none leading-6 mb-4"
                />
                <button 
                  type="submit" 
                  value="Send" 
                  className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Send
                </button>
            </form>    
        </div>
    );
}

export default Email;
