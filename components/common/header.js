import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from 'next/router'
import React from "react";


export default function Header(props) {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className=" top-0 bg-[#2E0249]  ">
      <nav className="w-full ">
    <div className="py-5 md:py-0  mx-auto px-6 flex items-center justify-between">
      <div aria-label="Home. logo" role="img">
        <img className=" w-48 md:w-auto "  src="https://exampleoneweb3.vercel.app/assets/logo.svg" alt="logo" />
      </div>
      <div>
        
        <button  onClick={() => setNavbarOpen(!navbarOpen)} className="sm:block md:hidden text-gray-200 hover:text-gray-200 focus:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
        <div id="menu" className="md:block lg:block hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="block md:hidden lg:hidden text-gray-200 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6">
            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
            
            
           
          </ul>
        </div>
      </div>
      <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm btn btn-glow">Join Discord</button>
    </div>
    
  </nav>
  <div className={!navbarOpen ? "hidden" : " inline"}>
          <nav className=" flex flex-col   text-base sm:hidden bg-secondary py-2 shadow-md border-b-2 border-gray-700   ">

            <ul className="ml-8">
         
            </ul>
            <button className=" focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700  sm:px-8 py-1 sm:py-3 text-sm btn btn-glow">Join Discord</button>
          </nav>
        </div>
    </div>
  );
}