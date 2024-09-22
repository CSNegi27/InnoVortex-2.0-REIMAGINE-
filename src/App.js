
import './App.css';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import DirectorPage from './pages/DirectorPage';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from  './Components/Navbar';
import Home from './pages/Home';

import Error from './pages/Error';


function App() {
  return (
   <div className='w-[100vw] h-[100vh] bg-cover bg-black overflow-x-hidden'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/director_page' element={<DirectorPage/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Error />} />
    </Routes>
   
      {/* <Footer /> */}
   </div>
  );
}

export default App;
