import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Navbar()  {
    const [click, setClick] =useState(false);
    const handleClick =() => setClick(!click);
    const content =
    <>
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
      <ul className='text-center text-xlp-20'>
        <Link spy={true} smooth={true} to="Home">
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>HOME</li>
        </Link>
        <Link spy={true} smooth={true} to="About us">
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>ABOUT US </li>
        </Link>
        <Link spy={true} smooth={true} to="Explore">
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>EXPLORE</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact us">
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>CONTACT US</li>
        </Link>
      </ul>
    </div>
    </>
   return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-2 px-10 py-2'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>Logo</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1.5 justify-end font-normal '>
            <div className="flex-10">
               <ul className='flex gap-8 mr-10 text-[16px]'>
                  <Link spy={true} smooth={true} to="Home">
                    <li className='hover:text-neutral-400 cursor-pointer '>HOME</li>
                  </Link>
                  <Link spy={true} smooth={true} to="About us">
                    <li className='hover:text-neutral-400  cursor-pointer '>ABOUT US </li>
                  </Link>
                  <Link spy={true} smooth={true} to="Explore">
                    <li className='hover:text-neutral-400 trasnsition  cursor-pointer '>EXPLORE</li>
                  </Link>
                   <Link spy={true} smooth={true} to="Contact us">
                    <li className='hover:text-neutral-400  cursor-pointer '>CONTACT US</li>
                  </Link>
                  <div className='flex items-center flex-1 \'>
                     <span className='text-3xl font-bold text-[16px]'>Logo</span>
                     <Link spy={true} smooth={true} to="Contact us">
                    <li className=' font-size:1rem lineheight:1.5rem ps-5 className hover:text-neutral-400  cursor-pointer'>+1 855-738-4499 <span className='whitespace-normal md:whitespace-pre'>Speak to travel experts.</span></li>
                     </Link>
                 </div>

                 </ul>
             </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
   
  );
};

export default Navbar;
