import React from 'react';
import backgroundImage from '../Images/cartoon-electrical-cables-flat-illustrations-set.png';
import logo1 from '../Images/gallerylogo1.png';
import logo2 from '../Images/gallerylogo2.png';
import PriceTable from './PriceTable';
import Footer from '../Components/Footer';

const Products = () => {
  return (
    <div>
      {/* Background image container */}
      <div>
        <div
          className="bg-cover relative bg-center h-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed', // Makes the background stay fixed
          }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-80 p-4 md:p-10">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 animate-pulse text-white">
              Our Products
            </h1>
          </div>
        </div>
      </div>

      <PriceTable />

      <div className="text-white mt-[10vh] flex flex-col gap-y-3 items-center text-center px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Innovations</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold">
          Industry Focused Products!
        </h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
          ALUMINIUM ROUND CABLE, MULTIPLE CONDUCTOR
        </h2>
      </div>

      {/* Logos Section */}
      <div className="flex flex-col md:flex-row justify-evenly mt-5 gap-4">
        <img src={logo1} alt="Gallery Logo 1" className="h-[250px] md:h-[400px] lg:h-[500px] mx-auto" />
        <img src={logo2} alt="Gallery Logo 2" className="h-[250px] md:h-[400px] lg:h-[500px] mx-auto" />
      </div>

      {/* Call to Action Section */}
      <div className="h-[30vh] md:h-[40vh] flex flex-col md:flex-row items-center justify-center gap-7 text-white text-center p-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl">
          Need Help with Easier Industrial Solutions? We Are Experts!
        </h1>
        <button>
          <a
            href="#_"
            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
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
};

export default Products;
