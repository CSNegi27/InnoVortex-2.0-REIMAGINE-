import React from 'react';
import '../App.css'; // Ensure your styles are imported
import backgroundImage from '../Images/wires2.png'; // Ensure this path is correct
import { FaAward, FaIndustry, FaCertificate } from 'react-icons/fa';
import Footer from '../Components/Footer';
import wireimage1 from '../Images/wireRolls.jpg';
import wireimage2 from '../Images/wireroll2.jpg';
import wireimage3 from '../Images/wireroll3.avif';
import wireimage4 from '../Images/wireroll4.avif';

const About = () => {
  return (
    <div className='relative'>
      <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex flex-col items-center justify-center h-full bg-black bg-opacity-80 p-10'>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-4 animate-bounce text-white'>About Us</h1>
        </div>
      </div>

      {/* Images section */}
      <div className='text-center mb-10'>
        <h2 className='text-4xl md:text-6xl font-bold text-white'>Who are We?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[8vh] mx-[5vw] md:mx-[7vw]'>
          {[wireimage1, wireimage2, wireimage3, wireimage4].map((image, index) => (
            <div key={index} className="mx-auto my-7 shadow-[10px_-5px_50px_-5px] h-[30vh] md:h-[35vh] shadow-blue-200">
              <img className="shadow-[20px_20px_rgba(255,255,255)] h-full object-cover" src={image} alt={`Wire ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Text section */}
      <div className='flex flex-col gap-y-14 mt-[10vh] px-4'>
        <div>
          <div className='flex justify-center mt-4 space-x-10 text-white flex-wrap'>
            <div className='flex flex-col items-center'>
              <FaAward className='text-6xl mb-2' />
              <p className='text-xl'>ISO 9001-2015 Certified</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaIndustry className='text-6xl mb-2' />
              <p className='text-xl'>Leading Manufacturer</p>
            </div>
            <div className='flex flex-col items-center'>
              <FaCertificate className='text-6xl mb-2' />
              <p className='text-xl'>Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-white'>
          <div>
            <h3 className='text-2xl mb-5 underline'>Our Commitment</h3>
            <p className='mb-4'>ORFLAX INDIA PVT LTD has emerged as one of the leading manufacturers and suppliers of various types of electric wires & cables under the brand name “ORFLAX”. We are dedicated to excelling in the research, development, and production of wires and cables for electrical and other electronic applications.</p>
          </div>
          <div>
            <h3 className='text-2xl mb-5 underline'>Quality Standards</h3>
            <p className='mb-4'>Since 15 years, our brand of wires & cables matches the highest international standards for quality and dependability. Each Cable/Wire undergoes rigorous quality checks at every stage, right from the purchasing of raw materials to designing, manufacturing, and dispatching.</p>
          </div>
          <div>
            <h3 className='text-2xl mb-5 underline'>Product Range</h3>
            <p className='mb-4'>We are based in North India, offering a wide range of copper and aluminium wires & cables, including Power & Control Cables, LT XLPE/PVC Cables, and Insulated Electrical Cables.</p>
          </div>
          <div>
            <h3 className='text-2xl mb-5 underline'>Client Commitment</h3>
            <p>We continuously strive to meet our clients' needs, earning their trust through our commitment to quality and excellence.</p>
          </div>
        </div>
      </div>

      <div className='h-auto md:h-[40vh] flex flex-col md:flex-row items-center justify-center gap-7 text-white p-4'>
        <h1 className='text-3xl md:text-4xl'>Need Help with Easier Industrial Solutions? We Are Experts!</h1>
        <button>
          <a href="tel:011-41523405" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3"> Contact Us on Call</span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default About;
