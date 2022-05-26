import React from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const handleContact = event => {
        event.preventDefault();
        toast.success('Message sent!');
        event.reset();
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Contact us</h1>
            <div class="flex justify-center items-center h-screen mx-auto bg-gray-100">

                <form onSubmit={handleContact} action="#" class="w-full md:w-3/4 lg:w-3/6 p-4">
                    <div class="p-3">
                        <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Name" required />
                    </div>
                    <div class="p-3">
                        <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Id" required />
                    </div>
                    <div class="p-3">
                        <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="number" placeholder="Mobile Number" required />
                    </div>
                    <div class="p-3">
                        <textarea class="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
                    </div>
                    <div class="p-3 pt-4">
                        <button class="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;