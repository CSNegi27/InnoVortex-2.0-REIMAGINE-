import React from 'react';
import backgroundImage from '../Images/wireroll2.jpg';
import gallery2 from "../Images/gallery2.jpeg";
import gallery3 from '../Images/gallery3.jpeg';
import twistedwire from '../Images/twisted-cable-white.png';
import wireroll3 from '../Images/wireroll3.avif';
import product from '../Images/product1.jpeg';
import wireroll from '../Images/wireRolls.jpg';
import wireroll4 from '../Images/wireroll4.avif';
import wirebundle from '../Images/wirebundlegallery.png';
import gallerywire from '../Images/gallerywire.png';
import wireimage from '../Images/electric-screened-cable-with-many-wires-isolated-white.jpg';
import gallery1 from '../Images/gallery1.jpeg';
import gallery4 from '../Images/gallery4.jpeg';
import gallery5 from '../Images/gallery5.jpeg';
import gallery6 from '../Images/gallery6.jpeg';
import logo1 from '../Images/gallerylogo1.png';
import logo2 from '../Images/gallerylogo2.png';
import wirebundle1 from '../Images/electrical-cable-.png';
import wirebundle2 from '../Images/electrical-cable-energy-technology-equipment-isolated-white.jpg';
import wiregallery from '../Images/wiregallery.jpg';
import Footer from '../Components/Footer';
import cartoonwire from '../Images/cartoon-electrical-cables-flat-illustrations-set.png';

const Gallery = () => {
  return (
    <div>
      <div className='bg-cover relative bg-center h-screen rounded-lg' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex flex-col items-center justify-center h-full bg-black bg-opacity-80 p-10'>
          <h1 className='text-8xl font-serif font-extrabold mb-4 animate-pulse text-white'>Gallery</h1>
        </div>
      </div>

      {/* Set 1 column on mobile, 2 columns on larger screens */}
      <div className='grid grid-cols-1 md:grid-cols-2 md:w-[80%] mx-auto my-[10vh] gap-9'>
        {[
          gallery2, logo2, twistedwire, cartoonwire, wireroll3,
          product, wireroll, wireroll4, gallery3, wirebundle,
          gallerywire, wireimage, gallery1, gallery4, gallery5,
          gallery6, wirebundle1, wirebundle2, wiregallery, logo1
        ].map((src, index) => (
          <div key={index} className="mx-auto my-7 shadow-[10px_-5px_50px_-5px] h-[33vh] shadow-blue-200">
            <img className="shadow-[20px_20px_rgba(255,255,255)] h-[33vh] object-cover" src={src} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className='h-[40vh] flex items-center justify-center gap-7 text-white'>
        <h1 className='text-4xl'>Need Help with Easier Industrial Solutions? We Are Experts!</h1>
        <button>
          <a href="#_" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3"> Learn More</span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
