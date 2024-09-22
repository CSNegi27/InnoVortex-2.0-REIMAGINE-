import React from 'react';
import personimage from '../Images/man-with-thumb-up-removebg.png';
import manimage from '../Images/bohemian-man-thinking.png';
import Footer from '../Components/Footer';
import wireImage from '../Images/wireimage.png';

const DirectorPage = () => {
  return (
    <div className='text-white relative'>
      <img src={wireImage} alt="" className='absolute h-[20vh] top-0 left-10 hidden md:block' />
      <img src={wireImage} alt="" className='absolute h-[20vh] top-0 right-10 transform scale-x-[-1] hidden md:block' />
      <img src={personimage} alt="" className='h-[80vh] md:h-[80vh] lg:h-[70vh] mx-auto object-cover' />

      <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-center mt-8'>Welcome To Orflax Family</div>
      <div className='mt-14'>
        <p className='underline text-3xl md:text-4xl lg:text-5xl text-center font-semibold font-serif'>
          Director's Message
        </p>

        <div className='flex flex-col md:flex-row items-center justify-evenly mt-10'>
          <img src={manimage} alt="" className='h-[40vh] md:h-[50vh] transform scale-x-[-1] mx-auto' />
          <p className='max-w-[80%] md:max-w-[40%] text-center mt-4 md:mt-0 mx-4'>
            “Orflax India has always stood for excellence, innovation, and integrity. Since our inception, we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer satisfaction. Today, I am proud to say that we have not only met but exceeded our goals, becoming a trusted name in the field of wires and cables manufacturing.”
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center mx-auto w-full mt-10'>
          <p className='max-w-[80%] md:max-w-[40%] text-center mt-4 md:mt-0 mx-4'>
            “Orflax India has always stood for excellence, innovation, and integrity. Since our inception, we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer satisfaction. Today, I am proud to say that we have not only met but exceeded our goals, becoming a trusted name in the field of wires and cables manufacturing.”
          </p>
          <img src={manimage} alt="" className='h-[40vh] md:h-[50vh] mx-auto' />
        </div>
      </div>

      <div className='h-[40vh] flex flex-col items-center justify-center gap-5 text-white text-center'>
        <h1 className='text-3xl md:text-4xl'>Need Help with Easier Industrial Solutions? We Are Experts!</h1>
        <button>
          <a href="#_" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">
              Learn More
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default DirectorPage;
