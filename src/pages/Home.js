import React from 'react'
import imagewire1 from '../Images/pngwing.com.png'
import bulbimage from '../Images/pngwing.com (3).png'
import { BiSolidPhoneCall } from "react-icons/bi";
import Banner from '../Images/video.mp4'
import '../App.css'
import wireimage from '../Images/—Pngtree—electrical wire vector_12161823.png'
import ragdoll from '../Images/rag-doll-pulling-blue-wire.png'
import  { Link } from 'react-router-dom'
import electricshield from '../Images/electrical-shielded-cable-with-many-wires-generative-al (1).jpg'
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import wireroll from '../Images/pngwing.com.swf.png'
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div className='mt-9 h-[100vh] w-[100vw]'>
      {/* Hero section 1 */}
      <div className='flex flex-col md:flex-row justify-between relative'>
  {/* Bulb image (hidden on mobile) */}
  <img
    src={bulbimage}
    alt=""
    className='hidden md:block lg:block  absolute -top-7 left-12'
    width={200}
  />

  {/* Left part */}
  <div className='text-white flex flex-col justify-center w-full md:w-[50vh] items-center lg:ml-10 mt-8 '>
    <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-white mb-4 tracking-wide">
      Orflax
    </h2>
    <p className="text-base md:text-xl text-gray-300 leading-relaxed">
      World Leading Cable Wire Industry
    </p>
    <p className='mb-6 text-center opacity-40'>
      "Delivering high-quality, durable, and innovative wire solutions that power industries around the globe."
    </p>

    {/* Call Now button */}
    <button>
      <a href="tel:011-41523405" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">
          <BiSolidPhoneCall className='text-2xl md:text-3xl text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900' />
          Call Now
        </span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>
    </button>
  </div>

  {/* Right part - Image (adjusted for mobile) */}
  <div className='mt-6 md:mt-0'>
    <img
      src={imagewire1}
      alt="Wire"
      className='w-full md:w-auto transform scale-x-[-1] mx-auto md:mx-0'
    />
  </div>
</div>


    {/* hero section 2 */}
     <div className='mt-20'>
       {/* Video */}
       <div className=" my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 w-[80%] mx-auto">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)] "
            muted
            loop
            autoPlay
            
          >
            <source src={Banner} type="video/mp4"/>
          </video>
        </div>

    </div>

    {/* hero section 3 */}

    <div className='mt-56 flex flex-col md:flex-row px-4 md:px-[12vh] relative'>
  {/* Background title */}
  <h2 className='text-center text-5xl md:text-8xl font-extrabold absolute -top-[10vh] md:-top-[15vh] left-1/2 transform -translate-x-1/2 text-white opacity-40'>
    About Us
  </h2>

  {/* Left-side ragdoll images (hidden on mobile) */}
  <img
    src={ragdoll}
    alt=""
    className='hidden md:block absolute -top-[20vh] left-0 h-[33vh]'
  />
  <img
    src={ragdoll}
    alt=""
    className='hidden md:block absolute -top-[20vh] right-0 transform scale-x-[-1] h-[33vh]'
  />

  {/* Text content */}
  <div className='text-white flex flex-col items-center gap-y-7 mt-[10vh] md:mt-[18vh] md:w-1/2'>
    <h2 className='text-3xl md:text-5xl font-bold underline mb-8'>
      15 Long Years
    </h2>
    <p className='text-center text-sm md:text-base opacity-80'>
      "ORFLAX INDIA PVT LTD is dedicated to excel in the research, development and production of wires
      and cables for electrical and other electronic applications."
    </p>
    <h3 className='text-center text-sm md:text-base opacity-80'>
      We are a North India based business group with a wide range of copper and aluminium wires & cables.
    </h3>

    {/* Learn More button */}
    <button>
      <a href="about" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3"> Learn More</span>
        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
      </a>
    </button>
  </div>

  {/* Wire image */}
  <div className='mt-10 md:mt-0 flex justify-center md:w-1/2'>
    <img
      src={wireimage}
      alt="Wire"
      className='w-full md:w-[650px] h-auto object-cover'
    />
  </div>
</div>


    {/* hero section 4 */}
    <div>
      <div></div>
      
      <div className="max-w-6xl mx-auto my-16 p-8">
      <h2 className="text-center text-4xl font-bold mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Performance and Reliability */}
        <div className="p-6 bg-white  shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">PERFORMANCE AND RELIABILITY</h3>
          <p className="text-gray-600">
            Human Capital leverages research, analytics, and industry insights to help design and execute critical programs from business driven HR to innovative talent, leadership, and change programs.
          </p>
        </div>

        {/* Best Quality */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">BEST QUALITY</h3>
          <p className="text-gray-600">
            Works with senior executives to help them solve their toughest and most complex problems by bringing an approach to executable strategy that combines deep industry knowledge and insight.
          </p>
        </div>

        {/* Technological Development */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-4">TECHNOLOGICAL DEVELOPMENT</h3>
          <p className="text-gray-600">
            Delivers solutions that help drive transformation, improve productivity, and streamline business operations. Our practical, innovative solutions are linked to measurable goals to help our clients.
          </p>
        </div>
      </div>
    </div>


    </div>

    {/* hero section 5 */}
 
<div className='flex flex-col md:flex-row w-[90%] mx-auto items-start mt-[50px] md:mt-[100px] gap-6'>

{/* Image Section */}
<div className="mx-auto my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 md:w-1/2">
  <img
    className="shadow-[20px_20px_rgba(255,255,255)] h-[30vh] md:h-[40vh] w-auto md:w-[100%]  mx-auto"
    src={electricshield} 
    alt="Electric Shield"
  />
</div>

{/* Text and Button Section */}
<div className='max-w-full md:max-w-[35%] items-start flex flex-col gap-y-6 md:gap-y-9 text-white px-4 md:px-0'>
  <h2 className='font-bold text-2xl md:text-4xl'>
    Our brand of wires & cables matches the highest international standards for quality and dependability. Each cable/wire undergoes rigorous quality checks at every stage, right from purchasing raw materials to designing, manufacturing, and dispatching.
  </h2>

  {/* Button */}
  <button>  
    <a href="about" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">      
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3"> 
        Learn More
      </span>
      <span className="absolute inset-0 border-2 border-white rounded-full"></span>
    </a>
  </button>
</div>
</div>



    
    {/* hero section 6 */}
    <div className='flex flex-col min-h-[100vh] text-white mt-[10vh] md:mt-[25vh] w-[90%] md:w-[70%] mx-auto relative'>
  {/* Heading and Subheading */}
  <h1 className='mb-5 text-center text-4xl md:text-5xl font-semibold'>Our Products</h1>
  <h2 className='text-center opacity-80 text-lg md:text-xl'>All Types of Armoured Cables</h2>
  <h2 className='text-center opacity-80 mb-16 text-base md:text-lg'>
    We are the industry heads and produce the most reliable and trendy solution you are looking for.
  </h2>

  {/* List of Products */}
  <ul className='flex flex-col gap-y-6 md:gap-y-8 mt-6 font-semibold opacity-90'>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>MULTISTAND WIRES (NEXA SERIES)</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>SUBMERSIBLE CABLES</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>MULTICORE ROUND CABLE</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>ALUMINIUM ROUND CABLE</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>ALUMINIUM SERVICE CABLE</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>PARALLEL FLAT CABLE</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>COPPER FLEXIBLE WIRE</Link>
    </li>
    <li className='flex gap-3 items-center'>
      <TbArrowBadgeRightFilled className='text-white text-xl md:text-2xl' />
      <Link>ALLOY FLEXIBLE WIRE</Link>
    </li>
  </ul>

  {/* Image */}
  <img 
    className='hidden md:block absolute right-5 top-[40vh] md:top-[22vh] h-[30vh] md:h-[60vh] object-contain'
    src={wireroll} 
    alt="Wire Roll" 
  />
</div>


<div className='h-auto md:h-[40vh] flex flex-col md:flex-row items-center justify-center gap-7 text-white p-4'>
        <h1 className='text-3xl md:text-4xl'>Need Help with Easier Industrial Solutions? We Are Experts!</h1>
        <button>
          <a href="about" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">Learn More</span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </button>
      </div>


{/* temporry footer  */}
<Footer />

    </div>
  )
}

export default Home

