import React from 'react';
import Footer from '../Components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="px-4 sm:px-8">
      <div className="mt-6 flex items-center justify-center">
        <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-[90%] h-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          <div>
            <h1 className="text-white text-3xl font-extrabold">Let's Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help? Then reach out—we'd love to hear about your project and provide help.
            </p>

            <div className="mt-12">
              <h2 className="text-white text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                      <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                    </svg>
                  </div>
                  <a href='/' className="text-[#007bff] text-sm ml-4">
                    <small className="block ">Mail</small>
                    <strong>Connect@orflaxindia.com</strong>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-white text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                {/* Replace the following links with your actual social links */}
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                 
                </li>
                {/* Add more social icons as needed */}
              </ul>
            </div>
          </div>

          <form className="ml-auto space-y-4" onSubmit={SubmitEvent}>
            <input
              type='text'
              placeholder='Name'
              className="w-full text-white bg-transparent rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type='email'
              placeholder='Email'
              className="w-full text-white bg-transparent rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type='text'
              placeholder='Subject'
              className="w-full text-white bg-transparent rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <textarea
              placeholder='Message'
              rows="6"
              className="w-full text-white bg-transparent rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
            ></textarea>
            <button
              type='button'
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className='text-white mb-10 flex flex-col gap-2 items-center'>
        <h1 className='text-5xl sm:text-7xl font-bold mb-10'>Contact Us</h1>
        <p className='text-lg sm:text-xl flex gap-3 items-center'>
          <FaLocationDot />
          B-42/15 Jhilmil Industrial Area, G.T. Road, Delhi 110 095
        </p>
        <p className='text-lg sm:text-xl flex gap-3 items-center'>
          <IoIosMail />
          Connect@orflaxindia.com
        </p>
        <p className='text-lg sm:text-xl flex gap-3 items-center'>
          <MdAddIcCall />
          +91 9313493405 | +91 9313666292 | +91 9205193405 | 011-41523405
        </p>
      </div>

      <div className="w-full h-96">
        <iframe 
        title="First iframe for Example 1"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
