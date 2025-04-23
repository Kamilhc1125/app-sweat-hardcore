import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { socialLinks } from '@/constants';
import NavLinks from './NavLinks';

import { imgLogo } from '@/assets/images';
import { imgFire11 } from "@/assets/gifs";
import useToggle from '@/hooks/useToggle';

const Header = () => {

  const { isOpen, toggle, open, close } = useToggle();

  const { facebook, linkedIn } = socialLinks;

  return (
    <div className="navbar sticky top-0 z-50 h-[64px] bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-black rounded-box z-10 mt-3 w-52 p-2 shadow">
              <NavLinks direction="flex-col" />
            </ul>
          )}
        </div>
        <a href="#">
          <img 
            src={imgLogo} 
            alt="logo" 
            width={120} 
            className="sh-hover-transition" />
        </a>
      </div>
      <div className="relative navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-2">
          <NavLinks direction="flex-row" />
        </ul>
      </div>
      <div className="relative navbar-end flex flex-row gap-4 items-center pr-6">
        <a href={facebook} target='_blank' className="z-20">
          <FaFacebook className='text-3xl hover:text-accent hover:cursor-pointer' />
        </a>
        <a href={linkedIn} target='_blank' className="z-20">
          <FaLinkedin className='text-3xl hover:text-accent hover:cursor-pointer' />
        </a>
        <div className="absolute -top-30 right-3 w-28 flex items-center justify-center rounded-lg z-0">
          <img src={imgFire11} />
        </div> 
      </div>
    </div>
  )
}

export default Header;
